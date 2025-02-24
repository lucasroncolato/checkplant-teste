import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import geoJSONData from "../../data/geojson.json";
import * as turf from "@turf/turf";
import PointList from "./PointList";
import Modal from "../Modal";
import Button from "../Button";

import iconPointGray from "../../assets/Regular=on.svg";
import iconPointOrange from "../../assets/Regular=off.svg";
import trashIcon from "../../assets/Trash.svg";
import pinIcon from "../../assets/Pin.svg";

const iconBase = new L.Icon({
  iconUrl: iconPointGray,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const selectedIcon = new L.Icon({
  iconUrl: iconPointOrange,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Map = () => {
  const [points, setPoints] = useState([]);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [canAddPoint, setCanAddPoint] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteMode, setDeleteMode] = useState(null);
  const polygon = turf.polygon(geoJSONData.features[0].geometry.coordinates);

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        if (!canAddPoint) return;

        const clickedPoint = turf.point([e.latlng.lng, e.latlng.lat]);
        if (turf.booleanPointInPolygon(clickedPoint, polygon)) {
          const newPoint = {
            id: Date.now(),
            position: e.latlng,
            createdAt: new Date().toLocaleString(),
          };
          setPoints([...points, newPoint]);
          setCanAddPoint(false);
        } else {
          alert("Clique dentro da área delimitada pelo polígono.");
        }
      },
    });
    return null;
  };

  const movePoint = (id, newPosition) => {
    const movedPoint = turf.point([newPosition.lng, newPosition.lat]);
    if (turf.booleanPointInPolygon(movedPoint, polygon)) {
      setPoints(points.map((point) => (point.id === id ? { ...point, position: newPosition } : point)));
    } else {
      alert("O ponto deve estar dentro da área delimitada!");
    }
  };

  const requestDeletePoint = (id) => {
    const pointToDelete = points.find((point) => point.id === id);
    setSelectedPoint(pointToDelete);
    setDeleteMode("single");
    setModalOpen(true);
  };

  const requestClearPoints = () => {
    setDeleteMode("all");
    setModalOpen(true);
  };

  const confirmDelete = () => {
    if (deleteMode === "single" && selectedPoint) {
      setPoints(points.filter((point) => point.id !== selectedPoint.id));
      setSelectedPoint(null);
    } else if (deleteMode === "all") {
      setPoints([]);
      setSelectedPoint(null);
    }
    setModalOpen(false);
  };

  return (
    <div>
      <PointList points={points} onRemove={requestDeletePoint} />

      <div className="absolute bottom-6 right-6 flex flex-col gap-2">

        {selectedPoint && (
          <Button onClick={() => requestDeletePoint(selectedPoint.id)} color="bg-[#D20200] text-white">
            Excluir Ponto <img src={trashIcon} alt="Trash" style={{ paddingLeft: '10px' }} />
          </Button>
        )}


        <Button
          onClick={() => setCanAddPoint(!canAddPoint)}
          color={`border-[#C8CED8] bg-white text-[#556476]`}
        >
          {canAddPoint ? "Cancelar" : "Adicionar Novo"}
          {canAddPoint ? '' : <img src={pinIcon} alt="Pin" style={{ paddingLeft: '10px' }} />}
        </Button>

        {points.length > 0 && (
          <Button onClick={requestClearPoints} color="bg-[#D20200] text-white">
            Deletar Todos <img src={trashIcon} alt="Trash" style={{ paddingLeft: '10px' }} />
          </Button>
        )}
      </div>

      <MapContainer center={[-15.18, -53.58]} zoom={15} className="h-[92vh] w-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <GeoJSON data={geoJSONData} />
        <MapClickHandler />
        {points.map((point) => (
          <Marker
            key={point.id}
            position={point.position}
            icon={point === selectedPoint ? selectedIcon : iconBase}
            eventHandlers={{
              click: () => setSelectedPoint(point),
              dragend: (e) => movePoint(point.id, e.target.getLatLng()),
            }}
            draggable
          />
        ))}
      </MapContainer>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} onConfirm={confirmDelete} deleteMode={deleteMode} />
    </div>
  );
};

export default Map;

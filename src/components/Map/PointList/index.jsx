import React from 'react';
import trashIcon from "../../../assets/Trash.svg";
import iconPoint from '../../../assets/Culture.svg';

const PointList = ({ points, onRemove }) => {
  return (
    <div className="absolute top-[100px] left-[20px] w-[250px] bg-white rounded-lg shadow-lg z-[9999]">
      <div className="w-full bg-gray-800 rounded-t-lg p-2">
        <h2 className="text-sm font-semibold text-white">Listagem de pontos</h2>
      </div>

      <div className="p-2 overflow-y-auto max-h-[300px]">
        {points.length === 0 ? (
          <h4 className="text-xs text-gray-800 text-center p-2">Sem pontos de monitoramento para exibir no momento.</h4>
        ) : (
          <ul>
            {points.map((point) => (
              <li
                key={point.id}
                className={`p-2 cursor-pointer transition-colors ${
                  point.selected ? 'bg-gray-100' : 'hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-2">
                  <img src={iconPoint} alt="icon-point" className="w-3 h-3" />

                  <div className="flex-1">
                    <h3 className="text-xs font-medium text-gray-700">Ponto nº {point.id}</h3>
                    <p className="text-xs text-gray-300">Criado em: {point.date}</p>
                  </div>

                  <button
                    onClick={() => onRemove(point.id)}
                    className="bg-transparent border-none cursor-pointer flex items-center"
                  >
                    <img src={trashIcon} alt="Trash" className="w-4 h-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PointList;
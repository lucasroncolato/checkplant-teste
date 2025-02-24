import React from "react";

const Modal = ({ isOpen, onClose, onConfirm, deleteMode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
      <div className="bg-[#F5F6FA] rounded-lg shadow-xl w-[320px]">
        <div className="bg-[#20252B] rounded-t-lg pr-2 pb-1 flex justify-end items-center">
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <span className="text-2xl">×</span>
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-bold text-[#415164]">
            Excluir {deleteMode === "all" ? "todos os pontos" : "ponto selecionado"}?
          </h2>
        </div>

        <div className="bg-white p-4 m-[15px] rounded-lg shadow-sm">
          <p className="text-base font-bold text-gray-600">
            Atenção!
          </p>
          <p className="text-sm text-gray-600">
            Essa ação não poderá ser desfeita.
          </p>
        </div>

        <div className="flex flex-row bg-white justify-center gap-4 mt-6 rounded-lg shadow-sm p-4">
          <button
            onClick={onConfirm}
            className="bg-white border border-[#FFD2D1] text-[#D20200] px-6 py-2 rounded-lg hover:bg-red-50 transition-colors font-bold uppercase text-xs"
          >
            EXCLUIR
          </button>

          <button
            onClick={onClose}
            className="text-[#415164] underline font-bold uppercase text-xs hover:text-[#556476] transition-colors"
          >
            CANCELAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
import React from 'react';

const BannerModal = ({ children, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white rounded-lg shadow-lg p-6 z-10">
                {children}
            </div>
        </div>
    );
};

export default BannerModal;

import React, { useState } from 'react';
import ImageUploadModal from '../../components/Modals/ImageUploadModal';
import PlayerTypeModal from '../../components/Modals/PlayerTypeModal';
import AddPlayerTypeModal from '../../components/Modals/AddPlayerTypeModal'
import Layout from "../../Layout";

function ActivityAdd() {

  return (
    <Layout>
    <div className="app-container">
<div className="add-activity">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Add Activity</h2>
      <hr className="border border-gray-300 mt-0" />
    </div>
      <div className="activity-section">
        <div className="image-upload">
          <ImageUploadModal />
        </div>       
      </div>

      <div className="player-types bg-black">
        <AddPlayerTypeModal 
          header="Non Goalkeeper"
          image="/path-to-non-goalkeeper-image"
        />
        <PlayerTypeModal 
          header="Goalkeeper"
          image="/path-to-goalkeeper-image"
        />
        <AddPlayerTypeModal />
      </div>

    </div>
    </Layout>
  );
}

export default ActivityAdd;

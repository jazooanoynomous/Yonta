import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Layout from "../../Layout";
import Input, { Button } from '../../components/Form';

const AddExpertBoard = () => {
  const [fullName, setFullName] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    // Implement save functionality here
    console.log('Saving expert:', { fullName, description });
  };

  return (
    <Layout>
      <div className="p-4">
        <div className="flex items-center mb-6">
          <ArrowLeft className="mr-2" />
          <h1 className="text-xl font-semibold">Add Expert Board</h1>
        </div>

        <div className="mb-4">
          <img
            src="images/2.png"
            alt="Expert avatar"
            className="w-20 h-20 rounded-full mb-2"
          />
        </div>

        <div className="mb-4">
          <div className="flex flex-col">
            <label className="text-black text-sm font-bold mb-2">Full Name</label>
            <Input
              name="fullName"
              type="text"
              placeholder="Nawab Shah"
              color={true}
              register={{ onChange: (e) => setFullName(e.target.value), value: fullName }}
              className='h-[54px] w-[814px] rounded-[10px]'
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-col">
            <label className="text-black text-sm font-bold mb-2">Description</label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="A balanced diet can provide your body with the nutrients it needs to function optimally, while reducing your risk of developing chronic diseases such*"
              className="w-[814px] h-[144px] bg-transparent text-sm p-4 border border-border font-light rounded-lg focus:border focus:border-subMain"
              rows={4}
            />
          </div>
        </div>

        <Button
          label="Save"
          onClick={handleSave}
          className="w-[814px] h-[54px] text-white"
        />
      </div>
    </Layout>
  );
};

export default AddExpertBoard;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
// This file is now deprecated. Only admin features are kept in the app.
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { X, Upload, Calendar, DollarSign, Target, Mic, ImagePlus, Trash } from 'lucide-react';

const CampaignForm = ({ campaign, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    artist: '',
    description: '',
    goalAmount: '',
    startDate: '',
    endDate: '',
    status: 'active',
    images: ['']
  });

  useEffect(() => {
    if (campaign) {
      setFormData({
        name: campaign.name || '',
        artist: campaign.artist || '',
        description: campaign.description || '',
        goalAmount: campaign.goalAmount || '',
        startDate: campaign.startDate || '',
        endDate: campaign.endDate || '',
        status: campaign.status || 'active',
        images: campaign.images && campaign.images.length > 0 ? campaign.images : ['']
      });
    }
  }, [campaign]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const campaignData = {
      ...formData,
      goalAmount: parseFloat(formData.goalAmount),
      images: formData.images.filter(img => img.trim() !== '').length > 0 
        ? formData.images.filter(img => img.trim() !== '') 
        : [`https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000000000)}?w=500&h=300&fit=crop`]
    };
    onSave(campaignData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (index, value) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData(prev => ({ ...prev, images: newImages }));
  };

  const addImageInput = () => {
    if (formData.images.length < 3) {
      setFormData(prev => ({ ...prev, images: [...prev.images, ''] }));
    }
  };

  const removeImageInput = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, images: newImages }));
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-2xl max-h-[90vh] overflow-y-auto no-scrollbar">
        <Card className="p-8 bg-gray-900 border border-purple-500/30 shadow-2xl shadow-purple-500/10">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white font-graffiti">{campaign ? 'Edit Campaign' : 'Create New Campaign'}</h2>
              <p className="text-gray-400">Fill in the details for the artist's project.</p>
            </div>
            <Button variant="ghost" size="icon" onClick={onCancel} className="text-gray-400 hover:text-white"><X className="w-5 h-5" /></Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2"><Label htmlFor="name" className="text-white flex items-center"><Target className="w-4 h-4 mr-2" />Campaign Name</Label><Input id="name" name="name" value={formData.name} onChange={handleChange} className="bg-gray-800 border-purple-500/30 text-white placeholder:text-gray-500" placeholder="e.g., Debut Album 'Street Echoes'" required /></div>
              <div className="space-y-2"><Label htmlFor="artist" className="text-white flex items-center"><Mic className="w-4 h-4 mr-2" />Artist Name</Label><Input id="artist" name="artist" value={formData.artist} onChange={handleChange} className="bg-gray-800 border-purple-500/30 text-white placeholder:text-gray-500" placeholder="e.g., MC Verse" required /></div>
            </div>
            <div className="space-y-2"><Label htmlFor="description" className="text-white">Description</Label><Textarea id="description" name="description" value={formData.description} onChange={handleChange} rows={4} className="bg-gray-800 border-purple-500/30 text-white placeholder:text-gray-500 resize-none" placeholder="Describe the project and its impact for the artist..." required /></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2"><Label htmlFor="goalAmount" className="text-white flex items-center"><DollarSign className="w-4 h-4 mr-2" />Goal Amount</Label><Input id="goalAmount" name="goalAmount" type="number" value={formData.goalAmount} onChange={handleChange} className="bg-gray-800 border-purple-500/30 text-white placeholder:text-gray-500" placeholder="0" min="1" required /></div>
              <div className="space-y-2"><Label htmlFor="status" className="text-white">Status</Label><select id="status" name="status" value={formData.status} onChange={handleChange} className="w-full px-3 py-2 bg-gray-800 border border-purple-500/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"><option value="active" className="bg-gray-800">Active</option><option value="paused" className="bg-gray-800">Paused</option><option value="completed" className="bg-gray-800">Completed</option></select></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2"><Label htmlFor="startDate" className="text-white flex items-center"><Calendar className="w-4 h-4 mr-2" />Start Date</Label><Input id="startDate" name="startDate" type="date" value={formData.startDate} onChange={handleChange} className="bg-gray-800 border-purple-500/30 text-white" required /></div>
              <div className="space-y-2"><Label htmlFor="endDate" className="text-white flex items-center"><Calendar className="w-4 h-4 mr-2" />End Date</Label><Input id="endDate" name="endDate" type="date" value={formData.endDate} onChange={handleChange} className="bg-gray-800 border-purple-500/30 text-white" required /></div>
            </div>
            <div className="space-y-4">
              <Label className="text-white flex items-center"><Upload className="w-4 h-4 mr-2" />Image URLs (up to 3)</Label>
              {formData.images.map((img, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input type="url" value={img} onChange={(e) => handleImageChange(index, e.target.value)} className="bg-gray-800 border-purple-500/30 text-white placeholder:text-gray-500" placeholder="https://unsplash.com/your-image.jpg" />
                  {formData.images.length > 1 && (<Button type="button" size="icon" variant="destructive" onClick={() => removeImageInput(index)}><Trash className="w-4 h-4" /></Button>)}
                </div>
              ))}
              {formData.images.length < 3 && (<Button type="button" variant="outline" onClick={addImageInput} className="border-purple-500/50 text-white hover:bg-purple-500/10"><ImagePlus className="w-4 h-4 mr-2" />Add Image</Button>)}
            </div>
            <div className="flex space-x-4 pt-6">
              <Button type="button" variant="outline" onClick={onCancel} className="flex-1 border-purple-500/50 text-white hover:bg-purple-500/10">Cancel</Button>
              <Button type="submit" className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold shadow-lg shadow-purple-500/30">{campaign ? 'Update Campaign' : 'Create Campaign'}</Button>
            </div>
          </form>
        </Card>
      </motion.div>
    </div>
  );
};

export default CampaignForm;
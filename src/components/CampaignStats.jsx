import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { TrendingUp, Target, DollarSign, Calendar, BarChart3, PieChart } from 'lucide-react';

const CampaignStats = ({ campaigns }) => {
  const totalRaised = campaigns.reduce((sum, campaign) => sum + campaign.currentAmount, 0);
  const totalGoal = campaigns.reduce((sum, campaign) => sum + campaign.goalAmount, 0);
  const activeCampaigns = campaigns.filter(c => c.status === 'active').length;
  const completedCampaigns = campaigns.filter(c => c.status === 'completed').length;
  const averageProgress = campaigns.length > 0 
    ? campaigns.reduce((sum, c) => sum + (c.currentAmount / c.goalAmount), 0) / campaigns.length * 100
    : 0;

  const topPerformers = campaigns
    .map(c => ({ ...c, progress: (c.currentAmount / c.goalAmount) * 100 }))
    .sort((a, b) => b.progress - a.progress)
    .slice(0, 3);

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Artist Analytics</h2>
        <p className="text-gray-400">Comprehensive insights into your artists' performance.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="p-6 bg-black/30 backdrop-blur-xl border-purple-500/20">
            <div className="flex items-center justify-between"><div><p className="text-gray-400 text-sm">Total Raised</p><p className="text-2xl font-bold text-white">${totalRaised.toLocaleString()}</p><p className="text-green-400 text-sm">{totalGoal > 0 ? Math.round((totalRaised / totalGoal) * 100) : 0}% of total goal</p></div><div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center"><DollarSign className="w-6 h-6 text-green-400" /></div></div>
          </Card>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="p-6 bg-black/30 backdrop-blur-xl border-purple-500/20">
            <div className="flex items-center justify-between"><div><p className="text-gray-400 text-sm">Active Campaigns</p><p className="text-2xl font-bold text-white">{activeCampaigns}</p><p className="text-blue-400 text-sm">{campaigns.length} total campaigns</p></div><div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center"><Target className="w-6 h-6 text-blue-400" /></div></div>
          </Card>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="p-6 bg-black/30 backdrop-blur-xl border-purple-500/20">
            <div className="flex items-center justify-between"><div><p className="text-gray-400 text-sm">Avg. Progress</p><p className="text-2xl font-bold text-white">{Math.round(averageProgress)}%</p><p className="text-purple-400 text-sm">Across all campaigns</p></div><div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center"><TrendingUp className="w-6 h-6 text-purple-400" /></div></div>
          </Card>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="p-6 bg-black/30 backdrop-blur-xl border-purple-500/20">
            <div className="flex items-center justify-between"><div><p className="text-gray-400 text-sm">Completed</p><p className="text-2xl font-bold text-white">{completedCampaigns}</p><p className="text-orange-400 text-sm">Successfully funded</p></div><div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center"><Calendar className="w-6 h-6 text-orange-400" /></div></div>
          </Card>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
        <Card className="p-6 bg-black/30 backdrop-blur-xl border-purple-500/20">
          <div className="flex items-center mb-6"><BarChart3 className="w-6 h-6 text-white mr-3" /><h3 className="text-xl font-bold text-white">Top Performing Artists</h3></div>
          <div className="space-y-4">
            {topPerformers.map((campaign, index) => (
              <motion.div key={campaign.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + index * 0.1 }} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${index === 0 ? 'bg-yellow-500/20 text-yellow-400' : index === 1 ? 'bg-gray-500/20 text-gray-400' : 'bg-orange-500/20 text-orange-400'}`}>{index + 1}</div>
                  <img src={campaign.images[0]} alt={campaign.name} className="w-12 h-12 rounded-lg object-cover" />
                  <div><h4 className="font-semibold text-white">{campaign.artist}</h4><p className="text-gray-400 text-sm">{campaign.name}</p></div>
                </div>
                <div className="text-right"><p className="text-white font-bold text-lg">{Math.round(campaign.progress)}%</p><div className="w-24 bg-gray-700 rounded-full h-2 mt-1"><div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: `${Math.min(campaign.progress, 100)}%` }}/></div></div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
        <Card className="p-6 bg-black/30 backdrop-blur-xl border-purple-500/20">
          <div className="flex items-center mb-6"><PieChart className="w-6 h-6 text-white mr-3" /><h3 className="text-xl font-bold text-white">Campaign Status Overview</h3></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center"><div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3"><span className="text-2xl font-bold text-green-400">{activeCampaigns}</span></div><p className="text-white font-semibold">Active</p><p className="text-gray-400 text-sm">Currently fundraising</p></div>
            <div className="text-center"><div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3"><span className="text-2xl font-bold text-orange-400">{completedCampaigns}</span></div><p className="text-white font-semibold">Completed</p><p className="text-gray-400 text-sm">Successfully funded</p></div>
            <div className="text-center"><div className="w-20 h-20 bg-gray-500/20 rounded-full flex items-center justify-center mx-auto mb-3"><span className="text-2xl font-bold text-gray-400">{campaigns.filter(c => c.status === 'paused').length}</span></div><p className="text-white font-semibold">Paused</p><p className="text-gray-400 text-sm">Temporarily stopped</p></div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default CampaignStats;
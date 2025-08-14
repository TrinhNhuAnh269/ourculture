import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { useToast } from './ui/use-toast';
import { 
  Heart, 
  Share2, 
  Shield,
  TrendingUp,
  DollarSign,
  Clock,
  Mic,
  Music,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const CountdownTimer = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <div key={interval} className="text-center"><span className="text-lg md:text-xl font-bold text-white">{timeLeft[interval]}</span><span className="block text-xs text-gray-400">{interval}</span></div>
  ));

  return <div className="flex justify-around items-center bg-black/20 p-2 rounded-lg"><Clock className="w-5 h-5 text-purple-400 mr-3" />{timerComponents.length ? timerComponents : <span className="text-white">Campaign Ended!</span>}</div>;
};

const ImageGallery = ({ images }) => {
  const [index, setIndex] = useState(0);
  const cycleImage = (direction) => {
    setIndex(prevIndex => (prevIndex + direction + images.length) % images.length);
  };
  return (
    <div className="relative w-full h-64 overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={images[index]}
          alt={`Campaign image ${index + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
      {images.length > 1 && (
        <>
          <Button size="icon" variant="ghost" onClick={() => cycleImage(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white"><ChevronLeft /></Button>
          <Button size="icon" variant="ghost" onClick={() => cycleImage(1)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white"><ChevronRight /></Button>
        </>
      )}
    </div>
  );
};

const PublicCampaigns = ({ onSwitchToAdmin }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [donationAmount, setDonationAmount] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    const savedCampaigns = localStorage.getItem('micdrop_campaigns');
    if (savedCampaigns) {
      setCampaigns(JSON.parse(savedCampaigns).filter(c => c.status === 'active'));
    } else {
      const demoCampaigns = [
        { id: 1, name: 'Flow & Fund: Debut Album', artist: 'MC Verse', description: 'Help MC Verse drop his first full-length studio album. Covering production, mixing, and mastering costs.', goalAmount: 15000, currentAmount: 8500, startDate: '2025-08-01', endDate: '2025-10-31', status: 'active', images: ['https://images.unsplash.com/photo-1516223725347-86db61428884?w=500', 'https://images.unsplash.com/photo-1594744806422-7a2a061358e6?w=500', 'https://images.unsplash.com/photo-1588243183576-96a836c1753c?w=500'] },
        { id: 2, name: 'Beat Drop: Studio Time', artist: 'DJ Riff', description: 'Fund professional studio time for DJ Riff to produce a new EP of groundbreaking beats.', goalAmount: 5000, currentAmount: 4200, startDate: '2025-09-01', endDate: '2025-11-30', status: 'active', images: ['https://images.unsplash.com/photo-1587825518933-DFecb64a2254?w=500', 'https://images.unsplash.com/photo-1542867543-a68e8156114b?w=500'] }
      ];
      setCampaigns(demoCampaigns);
      localStorage.setItem('micdrop_campaigns', JSON.stringify(demoCampaigns));
    }
  }, []);

  const handleDonate = (campaignId, amount) => {
    if (!amount || amount <= 0) { toast({ title: "Invalid Amount", description: "Please enter a valid donation amount.", variant: "destructive" }); return; }
    const savedCampaigns = localStorage.getItem('micdrop_campaigns');
    if (savedCampaigns) {
      const allCampaigns = JSON.parse(savedCampaigns);
      const updatedCampaigns = allCampaigns.map(c => c.id === campaignId ? { ...c, currentAmount: c.currentAmount + parseFloat(amount) } : c);
      localStorage.setItem('micdrop_campaigns', JSON.stringify(updatedCampaigns));
      setCampaigns(updatedCampaigns.filter(c => c.status === 'active'));
      toast({ title: "Donation Received!", description: `Your $${amount} donation is making a difference. Thank you!`, });
      setSelectedCampaign(null);
      setDonationAmount('');
    }
  };

  const handleShare = (campaign) => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      toast({ title: "Link Copied!", description: `Share ${campaign.artist}'s campaign with others!` });
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black"></div>
      <div className="relative z-10">
        <section className="relative overflow-hidden py-24 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-5xl md:text-7xl font-bold text-white mb-6 font-graffiti">MicDrop <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Fundz</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">Fueling the next wave of underground hip-hop. Your support, their sound.</motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold px-8 py-4 text-lg shadow-lg shadow-purple-500/30" onClick={() => document.getElementById('campaigns').scrollIntoView({ behavior: 'smooth' })}><Heart className="w-5 h-5 mr-2" />Back an Artist</Button>
            <Button size="lg" variant="outline" onClick={onSwitchToAdmin} className="border-purple-500/50 text-white hover:bg-purple-500/10 hover:border-purple-500/80 px-8 py-4 text-lg"><Shield className="w-5 h-5 mr-2" />Admin Access</Button>
          </motion.div>
        </section>

        <section className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center"><div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"><DollarSign className="w-8 h-8 text-green-400" /></div><h3 className="text-3xl font-bold text-white mb-2">${campaigns.reduce((s, c) => s + c.currentAmount, 0).toLocaleString()}</h3><p className="text-gray-400">Pledged by Fans</p></motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-center"><div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4"><TrendingUp className="w-8 h-8 text-blue-400" /></div><h3 className="text-3xl font-bold text-white mb-2">{campaigns.length}</h3><p className="text-gray-400">Live Campaigns</p></motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-center"><div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4"><Mic className="w-8 h-8 text-purple-400" /></div><h3 className="text-3xl font-bold text-white mb-2">{campaigns.length}</h3><p className="text-gray-400">Artists Supported</p></motion.div>
          </div></div>
        </section>

        <section id="campaigns" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-graffiti">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Projects</span></h2><p className="text-xl text-gray-300 max-w-2xl mx-auto">These artists are making moves. Check out their projects and show some love.</p></motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {campaigns.map((campaign, index) => (
                <motion.div key={campaign.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -10 }}>
                  <Card className="overflow-hidden bg-black/30 backdrop-blur-xl border-purple-500/20 hover:border-purple-400 transition-all duration-300 group shadow-lg">
                    <div className="relative group-hover:scale-105 transition-transform duration-300"><ImageGallery images={campaign.images} /><div className="absolute top-4 right-4"><Button size="sm" variant="ghost" onClick={() => handleShare(campaign)} className="bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white"><Share2 className="w-4 h-4" /></Button></div></div>
                    <div className="p-6">
                      <h3 className="font-bold text-white text-xl mb-1">{campaign.name}</h3>
                      <p className="text-purple-400 font-semibold mb-3">by {campaign.artist}</p>
                      <p className="text-gray-400 mb-4 line-clamp-2">{campaign.description}</p>
                      <div className="mb-4"><CountdownTimer endDate={campaign.endDate} /></div>
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm"><span className="text-gray-400">Progress</span><span className="text-white font-semibold">{Math.round((campaign.currentAmount / campaign.goalAmount) * 100)}%</span></div>
                        <div className="w-full bg-gray-700 rounded-full h-3"><motion.div initial={{ width: 0 }} whileInView={{ width: `${Math.min((campaign.currentAmount / campaign.goalAmount) * 100, 100)}%` }} transition={{ duration: 1, delay: 0.5 }} className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"/></div>
                        <div className="flex justify-between"><div><p className="text-white font-bold text-lg">${campaign.currentAmount.toLocaleString()}</p><p className="text-gray-400 text-sm">pledged</p></div><div className="text-right"><p className="text-white font-bold text-lg">${campaign.goalAmount.toLocaleString()}</p><p className="text-gray-400 text-sm">goal</p></div></div>
                      </div>
                      <Button onClick={() => setSelectedCampaign(campaign)} className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold shadow-lg shadow-purple-500/30"><Heart className="w-4 h-4 mr-2" />Fund Project</Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {selectedCampaign && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-gray-900 border border-purple-500/30 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-purple-500/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"><Music className="w-8 h-8 text-white" /></div>
                <h3 className="text-2xl font-bold text-white mb-1">Back {selectedCampaign.artist}</h3>
                <p className="text-gray-400">{selectedCampaign.name}</p>
              </div>
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-3 gap-3">
                  {[10, 25, 50].map(amount => (<Button key={amount} variant="outline" onClick={() => setDonationAmount(amount.toString())} className="border-purple-500/50 text-white hover:bg-purple-500/10">{`$${amount}`}</Button>))}
                </div>
                <div className="relative"><DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" /><input type="number" value={donationAmount} onChange={(e) => setDonationAmount(e.target.value)} placeholder="Custom amount" className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"/></div>
              </div>
              <div className="flex space-x-3">
                <Button variant="outline" onClick={() => { setSelectedCampaign(null); setDonationAmount(''); }} className="flex-1 border-purple-500/50 text-white hover:bg-purple-500/10">Cancel</Button>
                <Button onClick={() => handleDonate(selectedCampaign.id, parseFloat(donationAmount))} className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold">Pledge ${donationAmount || '0'}</Button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicCampaigns;
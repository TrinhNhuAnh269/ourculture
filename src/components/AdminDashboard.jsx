import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useToast } from './ui/use-toast';
import { 
  LogOut, 
  Plus, 
  TrendingUp, 
  DollarSign, 
  Edit,
  Trash2,
  BarChart3,
  Target,
  Globe,
  ListChecks,
  Music
} from 'lucide-react';
import CampaignForm from './CampaignForm';
import CampaignStats from './CampaignStats';
import Transactions from './Transactions';

const AdminDashboard = ({ user, onLogout, onSwitchToPublic }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [showCampaignForm, setShowCampaignForm] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const { toast } = useToast();

  useEffect(() => {
    loadCampaigns();
  }, []);

  const loadCampaigns = () => {
    const savedCampaigns = localStorage.getItem('micdrop_campaigns');
    if (savedCampaigns) {
      setCampaigns(JSON.parse(savedCampaigns));
    } else {
      const demoCampaigns = [
        {
          id: 1,
          name: 'Flow & Fund: Debut Album',
          artist: 'MC Verse',
          description: 'Help MC Verse drop his first full-length studio album. Covering production, mixing, and mastering costs.',
          goalAmount: 15000,
          currentAmount: 8500,
          startDate: '2025-08-01',
          endDate: '2025-10-31',
          status: 'active',
          images: [
            'https://images.unsplash.com/photo-1516223725347-86db61428884?w=500', 
            'https://images.unsplash.com/photo-1594744806422-7a2a061358e6?w=500',
            'https://images.unsplash.com/photo-1588243183576-96a836c1753c?w=500'
          ],
          createdAt: new Date().toISOString()
        },
        {
          id: 2,
          name: 'Beat Drop: Studio Time',
          artist: 'DJ Riff',
          description: 'Fund professional studio time for DJ Riff to produce a new EP of groundbreaking beats.',
          goalAmount: 5000,
          currentAmount: 4200,
          startDate: '2025-09-01',
          endDate: '2025-11-30',
          status: 'active',
          images: [
            'https://images.unsplash.com/photo-1587825518933-DFecb64a2254?w=500',
            'https://images.unsplash.com/photo-1542867543-a68e8156114b?w=500'
          ],
          createdAt: new Date().toISOString()
        }
      ];
      setCampaigns(demoCampaigns);
      localStorage.setItem('micdrop_campaigns', JSON.stringify(demoCampaigns));
    }
  };

  const saveCampaigns = (updatedCampaigns) => {
    setCampaigns(updatedCampaigns);
    localStorage.setItem('micdrop_campaigns', JSON.stringify(updatedCampaigns));
  };

  const handleCreateCampaign = (campaignData) => {
    const newCampaign = {
      ...campaignData,
      id: Date.now(),
      currentAmount: 0,
      createdAt: new Date().toISOString()
    };
    const updatedCampaigns = [...campaigns, newCampaign];
    saveCampaigns(updatedCampaigns);
    setShowCampaignForm(false);
    toast({
      title: "Campaign Created!",
      description: `The campaign for ${campaignData.artist} is live.`,
    });
  };

  const handleEditCampaign = (campaignData) => {
    const updatedCampaigns = campaigns.map(c => 
      c.id === editingCampaign.id ? { ...c, ...campaignData } : c
    );
    saveCampaigns(updatedCampaigns);
    setEditingCampaign(null);
    setShowCampaignForm(false);
    toast({
      title: "Campaign Updated!",
      description: `The campaign for ${campaignData.artist} has been updated.`,
    });
  };

  const handleDeleteCampaign = (campaignId) => {
    const updatedCampaigns = campaigns.filter(c => c.id !== campaignId);
    saveCampaigns(updatedCampaigns);
    toast({
      title: "Campaign Deleted",
      description: "The campaign has been removed.",
    });
  };

  const totalRaised = campaigns.reduce((sum, campaign) => sum + campaign.currentAmount, 0);
  const totalGoal = campaigns.reduce((sum, campaign) => sum + campaign.goalAmount, 0);
  const activeCampaigns = campaigns.filter(c => c.status === 'active').length;

  return (
    <div className="main-wrapper clearfix" style={{background: '#0b0b0b', color: '#aaa', minHeight: '100vh'}}>
      {/* HEADER (reuse main layout styles) */}
      <header id="header" className="header-style-1" style={{position: 'absolute', right: 0, left: 0, paddingTop: '30px', paddingBottom: '30px', zIndex: 101}}>
        <div className="container">
          <div className="row clearfix">
            <div className="header-clear clearfix">
              <div className="header-content-left clearfix">
                <div className="logo">
                  <a href="/">
                    <img src="/main-layout/img/dugem-logos.png" alt="Dugem Logo" />
                  </a>
                </div>
              </div>
              <div className="header-content-center clearfix">
                <nav className="main-nav">
                  <input id="main-menu-state" type="checkbox" />
                  <label className="main-menu-btn sub-menu-trigger" htmlFor="main-menu-state">
                    <span className="main-menu-btn-icon"></span> Toggle main menu visibility
                  </label>
                  <ul id="main-menu" className="sm sm-clean">
                    <li className="menu-item"><a href="#" className="menu-link active">Admin Panel</a></li>
                  </ul>
                </nav>
              </div>
              <div className="header-content-right">
                <div className="header-info head-item clearfix">
                  <div className="info-wrap">
                    <div className="search-wrap">
                      <button id="btn-search" className="btn btn--search" style={{color: '#fff'}}><i className="icon-simple-line-icons-143"></i></button>
                    </div>
                  </div>
                </div>
                <div className="admin-controls">
                  <a className="button-basic-1" style={{marginLeft: '0.5rem'}} href="#" onClick={e => {e.preventDefault(); onLogout();}}>Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <section className="content" style={{marginTop: '150px', marginBottom: '150px'}}>
        <div className="container">
          <div className="the-title text-center" style={{marginBottom: '40px'}}>
            <h5 className="head-title-2"> / ADMIN DASHBOARD </h5>
            <h2 className="head-title-1">Welcome, <span className="title-end">{user?.role || 'Admin'}.</span></h2>
            <p className="dugem-text">Manage campaigns, transactions, and analytics for your system.</p>
          </div>
          <div className="global-block">
            <div className="global-title">
              <a href="#" className="button-basic-1">Total Raised</a>
              <h2>{`$${totalRaised.toLocaleString()}`}</h2>
              <h5>/ Active Campaigns: {activeCampaigns}</h5>
              <p className="dugem-text">Success Rate: {totalGoal > 0 ? Math.round((totalRaised / totalGoal) * 100) : 0}%</p>
            </div>
          </div>
          <div className="table-events" style={{marginTop: '60px'}}>
            <div className="background-overlay"></div>
            <div className="the-title text-center">
              <h5 className="head-title-2"> / CAMPAIGNS </h5>
              <h2 className="head-title-1">Campaign List<span className="title-end">.</span></h2>
              <p className="dugem-text">All active and completed campaigns in the system.</p>
            </div>
            <table className="event">
              <thead>
                <tr>
                  <td>Date</td>
                  <td>Artist</td>
                  <td>Event</td>
                  <td>Goal</td>
                  <td>Raised</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                {campaigns.map(campaign => (
                  <tr key={campaign.id}>
                    <td className="event-date">{campaign.startDate}</td>
                    <td className="event-artist">{campaign.artist}</td>
                    <td className="event-title">{campaign.name}</td>
                    <td>${campaign.goalAmount.toLocaleString()}</td>
                    <td>${campaign.currentAmount.toLocaleString()}</td>
                    <td>{campaign.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="button-view text-center" style={{marginTop: '30px'}}>
              <a href="#" className="button-basic-1" onClick={e => {e.preventDefault(); setShowCampaignForm(true);}}>New Campaign</a>
            </div>
          </div>
          <div className="global-block" style={{marginTop: '60px'}}>
            <div className="global-title">
              <a href="#" className="button-basic-1">Transactions</a>
              <h2>Transactions</h2>
              <p className="dugem-text">View and manage all campaign transactions.</p>
              <Transactions />
            </div>
          </div>
          <div className="global-block" style={{marginTop: '60px'}}>
            <div className="global-title">
              <a href="#" className="button-basic-1">Analytics</a>
              <h2>Analytics</h2>
              <p className="dugem-text">Campaign performance and statistics.</p>
              <CampaignStats campaigns={campaigns} />
            </div>
          </div>
        </div>
        {showCampaignForm && (
          <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <CampaignForm
              campaign={editingCampaign}
              onSave={editingCampaign ? handleEditCampaign : handleCreateCampaign}
              onCancel={() => { setShowCampaignForm(false); setEditingCampaign(null); }}
            />
          </div>
        )}
      </section>
      {/* FOOTER (reuse main layout styles) */}
      <footer id="footer" className="footer clearfix">
        <div className="footer-wrap clearfix">
          <div className="footer-bottom clearfix">
            <div className="container">
              <div className="row">
                <div className="foot-col column column-1 text-center clearfix">
                  <div className="logo-footer">
                    <a href="/">
                      <img src="/main-layout/img/dugem-logos.png" alt="Logo-Footer" />
                    </a>
                  </div>
                </div>
                <div className="foot-col column column-1 text-center clearfix">
                  <div className="social-footer">
                    <ul>
                      <li className="soc-icon"><a href="#"><i className="icon icon-themify-13"></i>Twitter</a></li>
                      <li className="soc-icon"><a href="#"><i className="icon icon-themify-17"></i>Facebook</a></li>
                      <li className="soc-icon"><a href="#"><i className="icon icon-themify-11"></i>Google+</a></li>
                      <li className="soc-icon"><a href="#"><i className="icon icon-social-dribbble"></i>Dribbble</a></li>
                      <li className="soc-icon"><a href="#"><i className="icon icon-behance2"></i>Behance</a></li>
                    </ul>
                  </div>
                </div>
                <div className="foot-col column column-1 text-center clearfix">
                  <div id="copyright" className="copyright-text">
                    © Copyright 2021, Built by ThemesAwesome All rights reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminDashboard;
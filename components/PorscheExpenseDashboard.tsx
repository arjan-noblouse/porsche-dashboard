import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const PorscheExpenseDashboard = () => {
  const [activeTab, setActiveTab] = useState('summary');
  const [searchTerm, setSearchTerm] = useState('');

  // Complete invoice data set
  const invoiceData = [
    {
      date: "2022-10-23",
      vendor: "Rose Passion",
      description: "AFDICHTING, PROFIELSLANG, HOLLE SCHROEF (Gaskets, profile hose, hollow screw)",
      category: "Engine",
      partsCost: 44.21,
      laborCost: 0,
      total: 68.51
    },
    {
      date: "2023-03-20",
      vendor: "Rose Passion",
      description: "PER KIT VAN 4 BESTURINGSSLANGEN (Kit of 4 aviation/steering hoses)",
      category: "Cooling System",
      partsCost: 69.46,
      laborCost: 0,
      total: 96.78
    },
    {
      date: "2024-11-09",
      vendor: "Rose Passion",
      description: "VACUAEMPOMP (Vacuum pump)",
      category: "Engine",
      partsCost: 58.42,
      laborCost: 0,
      total: 84.48
    },
    {
      date: "2022-10-10",
      vendor: "Rose Passion",
      description: "TUSSENSTUK (Intermediate piece)",
      category: "Engine",
      partsCost: 15.94,
      laborCost: 0,
      total: 34.30
    },
    {
      date: "2018-01-07",
      vendor: "Rose Passion",
      description: "FLEXIBELE OLIEVERBINDING (Oil connection hose)",
      category: "Engine",
      partsCost: 126.00,
      laborCost: 0,
      total: 169.20
    },
    {
      date: "2018-01-30",
      vendor: "Rose Passion",
      description: "FLEXIBELE VERBINDING, TUSSENSTUK, SPANMOF (Various flexible connections)",
      category: "Engine",
      partsCost: 226.50,
      laborCost: 0,
      total: 293.40
    },
    {
      date: "2018-03-18",
      vendor: "Rose Passion",
      description: "COMPENSATIERESERVOIR, AFSLUITINGSDOP (Expansion tank and cap)",
      category: "Cooling System",
      partsCost: 247.99,
      laborCost: 0,
      total: 319.19
    },
    {
      date: "2018-03-19",
      vendor: "Rose Passion",
      description: "LEIDING (Hose/pipe)",
      category: "Engine",
      partsCost: 12.80,
      laborCost: 0,
      total: 15.36
    },
    {
      date: "2018-03-21",
      vendor: "Rose Passion",
      description: "AFSLUITING EXPANSIEVAT, NIVEAUCONTACTOR (Expansion tank cap and level sensor)",
      category: "Cooling System",
      partsCost: 129.55,
      laborCost: 0,
      total: 173.46
    },
    {
      date: "2023-02-23",
      vendor: "Houweling Automotion B.V.",
      description: "Clutch replacement and system service (clutch plates, pressure plate, bearing, parts)",
      category: "Transmission",
      partsCost: 744.39,
      laborCost: 845.50,
      total: 1923.18
    },
    {
      date: "2024-06-07",
      vendor: "Peters-Bearing",
      description: "Versandkosten (Credit note)",
      category: "Shipping",
      partsCost: 23.97,
      laborCost: 0,
      total: 29.00
    },
    {
      date: "2024-06-07",
      vendor: "Peters-Bearing",
      description: "Ceramic fuses (Pudenz), 25A from old stock (2 pcs) & 16A (1 pc)",
      category: "Electrical",
      partsCost: 25.62,
      laborCost: 0,
      total: 84.00
    },
    {
      date: "2023-10-19",
      vendor: "Alpo Alpogros BV",
      description: "Steering bracket reinforcement for Porsche 928",
      category: "Suspension",
      partsCost: 114.23,
      laborCost: 0,
      total: 148.50
    },
    {
      date: "2024-08-05",
      vendor: "Sideline Design Ltd",
      description: "Transmission mount 928 (2 pcs)",
      category: "Transmission",
      partsCost: 288.58,
      laborCost: 0,
      total: 349.18
    },
    {
      date: "2021-05-14",
      vendor: "Alpo Alpogros BV",
      description: "Hose clamps 40-60/9 (16 pcs)",
      category: "Cooling System",
      partsCost: 30.88,
      laborCost: 0,
      total: 47.65
    },
    {
      date: "2024-10-21",
      vendor: "Alpo Alpogros BV",
      description: "Engine bolt 928 & Turbo 2 air filter O-ring",
      category: "Engine",
      partsCost: 14.17,
      laborCost: 0,
      total: 27.43
    },
    {
      date: "2024-11-18",
      vendor: "Alpo Alpogros BV",
      description: "Various screws, seals and gaskets for 928",
      category: "Hardware",
      partsCost: 43.07,
      laborCost: 0,
      total: 62.40
    },
    {
      date: "2024-11-24",
      vendor: "9zwo8.com",
      description: "Oil pan gasket Porsche 928 silicon",
      category: "Engine",
      partsCost: 100.66,
      laborCost: 0,
      total: 112.66
    },
    {
      date: "2024-11-19",
      vendor: "Stig Fasteners Ltd",
      description: "Porsche 928 Oil Pan Stud & Nyloc Nut kit",
      category: "Engine",
      partsCost: 15.00,
      laborCost: 0,
      total: 31.50
    },
    {
      date: "2024-12-06",
      vendor: "Wams & Zn Garage",
      description: "Steering housing Porsche 928 4.5L",
      category: "Steering",
      partsCost: 589.00,
      laborCost: 0,
      total: 712.69
    },
    {
      date: "2023-04-17",
      vendor: "Alpo Alpogros BV",
      description: "928 ventilation nozzle",
      category: "Interior",
      partsCost: 29.80,
      laborCost: 0,
      total: 70.54
    },
    {
      date: "2025-01-27",
      vendor: "Maria Habeck Autoteile GmbH",
      description: "Stabilus 1439DY Vibration damper for engine mounts Porsche 928",
      category: "Engine",
      partsCost: 82.25,
      laborCost: 0,
      total: 92.94
    },
    {
      date: "2025-02-27",
      vendor: "Alpo Alpogros BV",
      description: "Steering pump revision set 928",
      category: "Steering",
      partsCost: 17.58,
      laborCost: 0,
      total: 27.93
    },
    {
      date: "2024-12-30",
      vendor: "Alpo Alpogros BV",
      description: "Thrust bearings standard, thrust washer 928/944/968, oil guide",
      category: "Engine",
      partsCost: 195.18,
      laborCost: 0,
      total: 246.45
    },
    {
      date: "2024-12-10",
      vendor: "Alpo Alpogros BV",
      description: "Oil line gasket 928, oil quantity cap, oil vent cap",
      category: "Engine",
      partsCost: 8.15,
      laborCost: 0,
      total: 16.52
    },
    {
      date: "2020-05-07",
      vendor: "Alpo Alpogros BV",
      description: "Steering hoses 928 L+R",
      category: "Steering",
      partsCost: 136.86,
      laborCost: 0,
      total: 174.60
    },
    {
      date: "2024-09-26",
      vendor: "9zwo8.com",
      description: "Air filter box tension band, hatch lock, cabin filter",
      category: "Air System",
      partsCost: 104.73,
      laborCost: 0,
      total: 116.73
    },
    {
      date: "2020-02-02",
      vendor: "Used Auto Services",
      description: "1983 PORSCHE 928 928S BOSCH Ignition Control Unit Module TSZ",
      category: "Electrical",
      partsCost: 65.03,
      laborCost: 0,
      total: 103.26
    },
    {
      date: "2020-05-28",
      vendor: "Alpo Alpogros BV",
      description: "Steering pump seal C2/4, steering connection rings",
      category: "Steering",
      partsCost: 56.38,
      laborCost: 0,
      total: 68.22
    },
    {
      date: "2018-05-23",
      vendor: "Alpo Alpogros BV",
      description: "Power distributor gasket 928",
      category: "Electrical",
      partsCost: 4.28,
      laborCost: 0,
      total: 8.81
    },
    {
      date: "2020-11-16",
      vendor: "Alpo Alpogros BV",
      description: "Heating pump relay 928",
      category: "HVAC",
      partsCost: 86.93,
      laborCost: 0,
      total: 114.26
    },
    {
      date: "2020-11-23",
      vendor: "Alpo Alpogros BV",
      description: "Vacuum regulators 928 and indicator hose 911/928",
      category: "Engine",
      partsCost: 57.33,
      laborCost: 0,
      total: 78.32
    },
    {
      date: "2020-03-15",
      vendor: "Alpo Alpogros BV",
      description: "Various O-rings, connection hoses, aluminum rings",
      category: "Engine",
      partsCost: 48.28,
      laborCost: 0,
      total: 67.49
    },
    {
      date: "2021-01-08",
      vendor: "Kroon Wire Harnesses B.V.",
      description: "Ground strap battery 928",
      category: "Electrical",
      partsCost: 38.00,
      laborCost: 0,
      total: 60.95
    },
    {
      date: "2020-09-16",
      vendor: "Alpo Alpogros BV",
      description: "Adapter tool 928",
      category: "Tools",
      partsCost: 32.15,
      laborCost: 0,
      total: 47.98
    },
    {
      date: "2025-03-10",
      vendor: "Classic Bremsen GmbH",
      description: "Porsche 928 front brake pads and rotors kit",
      category: "Brakes",
      partsCost: 345.75,
      laborCost: 0,
      total: 389.99
    },
    {
      date: "2024-10-01",
      vendor: "Alpo Alpogros BV",
      description: "Bosch WR 8 DC spark plugs (8x), ignition cable 928, spark plug cable set 928 1977-82",
      category: "Electrical",
      partsCost: 298.62,
      laborCost: 0,
      total: 361.33
    },
    {
      date: "2025-02-27",
      vendor: "Alpo Alpogros BV",
      description: "Hexagonal bolt M6x16, mounting bar, heater pipe 928, aluminum ring oil pump, heater valve hose, plugs",
      category: "HVAC",
      partsCost: 347.85,
      laborCost: 0,
      total: 431.18
    },
    {
      date: "2023-08-28",
      vendor: "928-944parts",
      description: "Porsche 928 - Powerlight starter, lightweight and quick start",
      category: "Electrical",
      partsCost: 449.00,
      laborCost: 0,
      total: 457.45
    },
    {
      date: "2024-01-01",
      vendor: "FedEx",
      description: "International shipping FedEx Priority",
      category: "Shipping",
      partsCost: 0,
      laborCost: 0,
      total: 109.70
    },
    {
      date: "2024-11-04",
      vendor: "9zwo8.com",
      description: "Oil fill cap gasket Porsche 928, disc valve heating valve, Y-distributor vacuum, vacuum hose",
      category: "HVAC",
      partsCost: 71.34,
      laborCost: 0,
      total: 83.34
    },
    {
      date: "2025-03-18",
      vendor: "Performance Auto Electric GmbH",
      description: "Porsche 928 ECU diagnostic and repair service",
      category: "Electrical",
      partsCost: 215.80,
      laborCost: 175.00,
      total: 390.80
    },
    {
      date: "2018-04-19",
      vendor: "Alpo Alpogros BV",
      description: "Timing belt guide retainer 928S, distributor gasket 928",
      category: "Electrical",
      partsCost: 6.02,
      laborCost: 0,
      total: 11.52
    },
    {
      date: "2018-04-25",
      vendor: "Alpo Alpogros BV",
      description: "Rotary slide bolt 928/944, exhaust manifold gasket 928",
      category: "Exhaust",
      partsCost: 31.00,
      laborCost: 0,
      total: 47.80
    },
    {
      date: "2018-08-14",
      vendor: "Alpo Alpogros BV",
      description: "Cable holder 928 (multiple)",
      category: "Electrical",
      partsCost: 8.02,
      laborCost: 0,
      total: 13.94
    },
    {
      date: "2018-07-14",
      vendor: "Alpo Alpogros BV",
      description: "Radiator drain plug 928, vacuum distributor 928, O-ring radiator drain plug 928",
      category: "Cooling System",
      partsCost: 16.89,
      laborCost: 0,
      total: 28.47
    },
    {
      date: "2017-11-13",
      vendor: "Alpo Alpogros BV",
      description: "Air filter O-ring 928, engine mount 928, flywheel blocking tool 928, water pump gasket 928, water pump 928, camshaft gear 928",
      category: "Engine",
      partsCost: 794.57,
      laborCost: 0,
      total: 970.50
    },
    {
      date: "2025-01-13",
      vendor: "Alpo Alpogros BV",
      description: "Steering pump revision set 928",
      category: "Steering",
      partsCost: 17.58,
      laborCost: 0,
      total: 27.93
    },
    {
      date: "2014-11-14",
      vendor: "928sRus",
      description: "Fuel Hose Kit - Early CIS & Shipping",
      category: "Fuel System",
      partsCost: 84.50,
      laborCost: 0,
      total: 112.00
    },
    {
      date: "2017-11-21",
      vendor: "928sRus",
      description: "PK Tensioner Bracket With Air Pump - Complete with Audi Parts and fitting hardware",
      category: "Engine",
      partsCost: 418.00,
      laborCost: 0,
      total: 493.00
    },
    {
      date: "2025-02-12",
      vendor: "928-944parts",
      description: "Porsche 928 aluminum steering housing bushings anodized & rubber coupling steering rod",
      category: "Steering",
      partsCost: 139.21,
      laborCost: 0,
      total: 165.62
    },
    {
      date: "2025-02-27",
      vendor: "928-944parts",
      description: "Porsche 928 Airpump delete kit",
      category: "Engine",
      partsCost: 57.48,
      laborCost: 0,
      total: 66.89
    }
  ];

  // Filter invoices based on search term
  const filteredInvoices = invoiceData.filter(invoice => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      invoice.vendor.toLowerCase().includes(searchTermLower) ||
      invoice.description.toLowerCase().includes(searchTermLower) ||
      invoice.category.toLowerCase().includes(searchTermLower) ||
      formatDate(invoice.date).toLowerCase().includes(searchTermLower)
    );
  });

  // Calculate summary stats
  const totalSpent = invoiceData.reduce((sum, invoice) => sum + invoice.total, 0);
  const totalParts = invoiceData.reduce((sum, invoice) => sum + invoice.partsCost, 0);
  const totalLabor = invoiceData.reduce((sum, invoice) => sum + invoice.laborCost, 0);
  const invoiceCount = invoiceData.length;

  // Group by category for pie chart
  const categorySummary = [];
  const categoryTotals = {};
  
  invoiceData.forEach(invoice => {
    if (!categoryTotals[invoice.category]) {
      categoryTotals[invoice.category] = 0;
    }
    categoryTotals[invoice.category] += invoice.total;
  });
  
  Object.entries(categoryTotals).forEach(([category, total]) => {
    categorySummary.push({
      name: category,
      value: total,
      percentage: ((total/totalSpent)*100).toFixed(1)
    });
  });
  
  // Sort the category summary by value (descending)
  categorySummary.sort((a, b) => b.value - a.value);

  // Group by vendor
  const vendorSummary = [];
  const vendorTotals = {};
  
  invoiceData.forEach(invoice => {
    if (!vendorTotals[invoice.vendor]) {
      vendorTotals[invoice.vendor] = {
        count: 0,
        total: 0
      };
    }
    vendorTotals[invoice.vendor].count += 1;
    vendorTotals[invoice.vendor].total += invoice.total;
  });
  
  Object.entries(vendorTotals).forEach(([vendor, data]) => {
    vendorSummary.push({
      name: vendor,
      value: data.total,
      count: data.count
    });
  });
  
  // Sort the vendor summary by value (descending)
  vendorSummary.sort((a, b) => b.value - a.value);

  // Group by year
  const yearSummary = [];
  const yearTotals = {};
  
  invoiceData.forEach(invoice => {
    const year = invoice.date.split('-')[0];
    if (!yearTotals[year]) {
      yearTotals[year] = 0;
    }
    yearTotals[year] += invoice.total;
  });
  
  Object.entries(yearTotals).forEach(([year, total]) => {
    yearSummary.push({
      name: year,
      value: total
    });
  });
  
  // Sort the year summary chronologically
  yearSummary.sort((a, b) => a.name - b.name);

  // Porsche brand colors
  const PORSCHE_RED = '#D5001C';
  const PORSCHE_BLACK = '#000000';
  const PORSCHE_GOLD = '#C19A6B';  
  const PORSCHE_SILVER = '#DEDEDE';
  const PORSCHE_WHITE = '#FFFFFF';
  const PORSCHE_DARK_GRAY = '#2A2A2A';
  const PORSCHE_LIGHT_GRAY = '#E5E5E5';

  // Chart colors based on Porsche brand
  const COLORS = [PORSCHE_RED, PORSCHE_BLACK, PORSCHE_GOLD, PORSCHE_SILVER, PORSCHE_DARK_GRAY, '#777777', '#999999'];
  const CHART_LINE_COLOR = PORSCHE_LIGHT_GRAY;

  // Format currency
  const formatCurrency = (value) => {
    return `€${value.toFixed(2)}`;
  };

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  // Category color mapping for consistent colors
  const getCategoryColor = (category) => {
    const categoryColors = {
      'Engine': 'bg-red-100 text-red-700',
      'Transmission': 'bg-blue-100 text-blue-700',
      'Cooling System': 'bg-cyan-100 text-cyan-700',
      'Electrical': 'bg-yellow-100 text-yellow-700',
      'Steering': 'bg-green-100 text-green-700',
      'Brakes': 'bg-purple-100 text-purple-700',
      'Suspension': 'bg-pink-100 text-pink-700',
      'Exhaust': 'bg-orange-100 text-orange-700',
      'Interior': 'bg-indigo-100 text-indigo-700',
      'HVAC': 'bg-teal-100 text-teal-700',
      'Fuel System': 'bg-amber-100 text-amber-700',
      'Hardware': 'bg-slate-100 text-slate-700',
      'Shipping': 'bg-gray-100 text-gray-700',
      'Tools': 'bg-emerald-100 text-emerald-700',
      'Air System': 'bg-lime-100 text-lime-700'
    };
    
    return categoryColors[category] || 'bg-gray-100 text-gray-700';
  };
  
  return (
    <div className="bg-white font-sans" style={{ fontFamily: 'PorscheNext, Helvetica, Arial, sans-serif' }}>
      {/* Browser Chrome Mockup */}
      <div className="bg-gray-100 pt-1 px-1 border-b border-gray-300">
        <div className="flex items-center bg-white border border-gray-300 rounded-t-md pl-3 pr-1 py-1 space-x-1">
          <div className="flex space-x-1 mr-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 bg-gray-100 rounded-md px-3 py-1 text-xs text-gray-600 text-center">
            Porsche 928 Expense Dashboard | my.porsche.com
          </div>
          <div className="h-6 w-6 flex items-center justify-center rounded hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Application Content */}
      <div className="p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header with official Porsche logo */}
          <div className="bg-white rounded-md p-6 mb-6 border border-gray-200 shadow-sm">
            <div className="flex flex-col items-center md:flex-row md:justify-between">
              <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
               <img
		src="https://1000logos.net/wp-content/uploads/2018/02/Porsche-Logo.png"
		alt="Porsche logo alt"
		classname="h-16 mb-3 md:mb-0 md:mr-6"
                <div className="text-center md:text-left">
                  <h1 className="text-3xl font-bold tracking-tight text-black">928</h1>
                  <div className="w-12 h-1 bg-red-600 my-2 mx-auto md:mx-0"></div>
                  <p className="text-xl font-light text-gray-600">Maintenance Expense Tracker</p>
                </div>
              </div>
                           <div className="flex flex-col items-end">
                <div className="text-right">
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Total Maintenance Record</p>
                  <p className="text-xl font-bold text-black">{invoiceData.length} Invoices</p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="rounded-md shadow-sm border border-gray-200 p-6 transition-all hover:shadow-md">
              <h3 className="text-lg font-semibold text-black uppercase tracking-wider">Total Expenses</h3>
              <p className="text-3xl font-bold text-black mt-2">{formatCurrency(totalSpent)}</p>
              <p className="text-sm text-gray-600 mt-1">{invoiceCount} invoices</p>
              <div className="w-16 h-1 bg-red-600 mt-4"></div>
            </div>
            <div className="rounded-md shadow-sm border border-gray-200 p-6 transition-all hover:shadow-md">
              <h3 className="text-lg font-semibold text-black uppercase tracking-wider">Parts Cost</h3>
              <p className="text-3xl font-bold text-black mt-2">{formatCurrency(totalParts)}</p>
              <p className="text-sm text-gray-600 mt-1">{((totalParts/totalSpent)*100).toFixed(1)}% of total</p>
              <div className="w-16 h-1 bg-red-600 mt-4"></div>
            </div>
            <div className="rounded-md shadow-sm border border-gray-200 p-6 transition-all hover:shadow-md">
              <h3 className="text-lg font-semibold text-black uppercase tracking-wider">Labor Cost</h3>
              <p className="text-3xl font-bold text-black mt-2">{formatCurrency(totalLabor)}</p>
              <p className="text-sm text-gray-600 mt-1">{((totalLabor/totalSpent)*100).toFixed(1)}% of total</p>
              <div className="w-16 h-1 bg-red-600 mt-4"></div>
            </div>
          </div>

          {/* Main content area with tabs */}
          <div className="rounded-md shadow-sm border border-gray-200 bg-white overflow-hidden mb-6">
            {/* Navigation Tabs */}
            <div className="border-b border-gray-200 bg-white">
              <nav className="flex">
                <button
                  className={`px-6 py-3 text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                    activeTab === 'summary' 
                      ? 'text-red-600 border-b-2 border-red-600' 
                      : 'text-gray-700 hover:text-red-600'
                  }`}
                  onClick={() => setActiveTab('summary')}
                >
                  Summary
                </button>
                <button
                  className={`px-6 py-3 text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                    activeTab === 'categories' 
                      ? 'text-red-600 border-b-2 border-red-600' 
                      : 'text-gray-700 hover:text-red-600'
                  }`}
                  onClick={() => setActiveTab('categories')}
                >
                  Categories
                </button>
                <button
                  className={`px-6 py-3 text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                    activeTab === 'vendors' 
                      ? 'text-red-600 border-b-2 border-red-600' 
                      : 'text-gray-700 hover:text-red-600'
                  }`}
                  onClick={() => setActiveTab('vendors')}
                >
                  Vendors
                </button>
                <button
                  className={`px-6 py-3 text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                    activeTab === 'invoices' 
                      ? 'text-red-600 border-b-2 border-red-600' 
                      : 'text-gray-700 hover:text-red-600'
                  }`}
                  onClick={() => setActiveTab('invoices')}
                >
                  Invoices
                </button>
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'summary' && (
                <div>
                  <h2 className="text-xl font-bold mb-6 text-black uppercase tracking-wider border-b pb-2">Expense Summary</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Expenses by Year Chart */}
                    <div className="p-4 rounded-md border border-gray-200">
                      <h3 className="text-lg font-semibold mb-4 text-black uppercase tracking-wider">Expenses by Year</h3>
                      <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={yearSummary} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke={CHART_LINE_COLOR} />
                            <XAxis dataKey="name" tick={{ fill: '#1A1A1A' }} />
                            <YAxis tickFormatter={(value) => `€${value}`} tick={{ fill: '#1A1A1A' }} />
                            <Tooltip 
                              formatter={(value) => [`€${value.toFixed(2)}`, 'Amount']}
                              contentStyle={{ backgroundColor: PORSCHE_WHITE, borderColor: PORSCHE_LIGHT_GRAY }}
                            />
                            <Bar dataKey="value" fill={PORSCHE_RED} name="Total" radius={[4, 4, 0, 0]} barSize={40} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    
                    {/* Top Categories Pie Chart */}
                    <div className="p-4 rounded-md border border-gray-200">
                      <h3 className="text-lg font-semibold mb-4 text-black uppercase tracking-wider">Top Categories</h3>
                      <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={categorySummary.slice(0, 5)}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              outerRadius={100}
                              innerRadius={40}
                              fill={PORSCHE_BLACK}
                              dataKey="value"
                              nameKey="name"
                              label={({ name, percentage }) => `${name}: ${percentage}%`}
                            >
                              {categorySummary.slice(0, 5).map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke={PORSCHE_WHITE} strokeWidth={1} />
                              ))}
                            </Pie>
                            <Tooltip 
                              formatter={(value) => [`€${value.toFixed(2)}`, 'Amount']}
                              contentStyle={{ backgroundColor: PORSCHE_WHITE, borderColor: PORSCHE_LIGHT_GRAY }}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    
                    {/* Recent Activity Card */}
                    <div className="p-4 rounded-md border border-gray-200 lg:col-span-2">
                      <h3 className="text-lg font-semibold mb-4 text-black uppercase tracking-wider">Recent Expenses</h3>
                      <div className="overflow-x-auto">
                        <table className="min-w-full">
                          <thead>
                            <tr className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b-2 border-gray-200">
                              <th className="py-3 px-4">Date</th>
                              <th className="py-3 px-4">Vendor</th>
                              <th className="py-3 px-4">Category</th>
                              <th className="py-3 px-4 text-right">Amount</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {invoiceData
                              .sort((a, b) => new Date(b.date) - new Date(a.date))
                              .slice(0, 5)
                              .map((invoice, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                  <td className="py-2 px-4">{formatDate(invoice.date)}</td>
                                  <td className="py-2 px-4 font-medium text-gray-900">{invoice.vendor}</td>
                                  <td className="py-2 px-4">
                                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${getCategoryColor(invoice.category)}`}>
                                      {invoice.category}
                                    </span>
                                  </td>
                                  <td className="py-2 px-4 text-right font-medium text-gray-900">{formatCurrency(invoice.total)}</td>
                                </tr>
                              ))
                            }
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'categories' && (
                <div>
                  <h2 className="text-xl font-bold mb-6 text-black uppercase tracking-wider border-b pb-2">Expenses by Category</h2>
                  
                  {/* Category Bar Chart */}
                  <div className="p-4 rounded-md border border-gray-200 mb-6">
                    <div className="h-96">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={categorySummary.slice(0, 10)} layout="vertical" margin={{ top: 5, right: 30, left: 150, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke={CHART_LINE_COLOR} />
                          <XAxis type="number" tickFormatter={(value) => `€${value}`} tick={{ fill: '#1A1A1A' }} />
                          <YAxis 
                            type="category" 
                            dataKey="name" 
                            width={140} 
                            tick={{ fill: '#1A1A1A', fontSize: 12 }}
                          />
                          <Tooltip 
                            formatter={(value) => [`€${value.toFixed(2)}`, 'Amount']}
                            contentStyle={{ backgroundColor: PORSCHE_WHITE, borderColor: PORSCHE_LIGHT_GRAY }}
                          />
                          <Bar dataKey="value" fill={PORSCHE_RED} name="Total" radius={[0, 4, 4, 0]} barSize={20} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  {/* Category Table */}
                  <div className="rounded-md border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr className="bg-gray-50 border-b-2 border-gray-200">
                            <th className="py-3 px-6 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
                            <th className="py-3 px-6 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Amount</th>
                            <th className="py-3 px-6 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Percentage</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {categorySummary.map((category, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="py-3 px-6 text-sm font-medium text-gray-900">
                                <div className="flex items-center">
                                  <div className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                                  {category.name}
                                </div>
                              </td>
                              <td className="py-3 px-6 text-sm text-gray-900 text-right font-medium">{formatCurrency(category.value)}</td>
                              <td className="py-3 px-6 text-sm text-gray-900 text-right">{category.percentage}%</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'vendors' && (
                <div>
                  <h2 className="text-xl font-bold mb-6 text-black uppercase tracking-wider border-b pb-2">Expenses by Vendor</h2>
                  
                  {/* Vendor Table */}
                  <div className="rounded-md border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr className="bg-gray-50 border-b-2 border-gray-200">
                            <th className="py-3 px-6 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Vendor</th>
                            <th className="py-3 px-6 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Invoices</th>
                            <th className="py-3 px-6 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Average</th>
                            <th className="py-3 px-6 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Total Amount</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {vendorSummary.map((vendor, index) => (
                            <tr key={index} className="hover:bg-gray-50 transition-colors">
                              <td className="py-3 px-6 text-sm font-medium text-gray-900">{vendor.name}</td>
                              <td className="py-3 px-6 text-sm text-gray-900 text-center">
                                <span className="px-2 py-1 text-xs rounded-full bg-gray-100 font-medium">{vendor.count}</span>
                              </td>
                              <td className="py-3 px-6 text-sm text-gray-900 text-right">{formatCurrency(vendor.value / vendor.count)}</td>
                              <td className="py-3 px-6 text-sm text-gray-900 text-right font-medium">{formatCurrency(vendor.value)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'invoices' && (
                <div>
                  <h2 className="text-xl font-bold mb-6 text-black uppercase tracking-wider border-b pb-2">Invoice List</h2>
                  
                  {/* Search */}
                  <div className="mb-6">
                    <div className="relative max-w-md">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-red-600 focus:border-red-600 sm:text-sm"
                        placeholder="Search invoices..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  {/* Invoice Table */}
                  <div className="rounded-md border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr className="bg-gray-50 border-b-2 border-gray-200">
                            <th className="py-3 px-6 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                            <th className="py-3 px-6 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Vendor</th>
                            <th className="py-3 px-6 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden md:table-cell">Description</th>
                            <th className="py-3 px-6 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Category</th>
                            <th className="py-3 px-6 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Amount</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {filteredInvoices.sort((a, b) => new Date(b.date) - new Date(a.date)).map((invoice, index) => (
                            <tr key={index} className="hover:bg-gray-50 transition-colors">
                              <td className="py-3 px-6 text-sm text-gray-700 whitespace-nowrap">
                                {formatDate(invoice.date)}
                              </td>
                              <td className="py-3 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                {invoice.vendor}
                              </td>
                              <td className="py-3 px-6 text-sm text-gray-500 hidden md:table-cell">
                                <div className="truncate max-w-xs">
                                  {invoice.description}
                                </div>
                              </td>
                              <td className="py-3 px-6 text-sm whitespace-nowrap">
                                <span className={`px-2 py-1 text-xs rounded-full font-medium ${getCategoryColor(invoice.category)}`}>
                                  {invoice.category}
                                </span>
                              </td>
                              <td className="py-3 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-right">
                                {formatCurrency(invoice.total)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    {/* No results message */}
                    {filteredInvoices.length === 0 && (
                      <div className="text-center py-8">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No invoices found</h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Try adjusting your search or filter to find what you are looking for.
                        </p>
                        <div className="mt-3">
                          <button 
                            type="button" 
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none"
                            onClick={() => setSearchTerm('')}
                          >
                            Clear filters
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Actions section */}
          <div className="mb-6">
            <button type="button" className="inline-flex items-center px-5 py-2.5 bg-red-600 text-white font-medium rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors uppercase tracking-wider text-sm">
              <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add New Invoice
            </button>
          </div>

          {/* Footer with Porsche branding */}
          <div className="mt-12 border-t pt-6 pb-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <div className="flex items-center">
                  {/* Porsche wordmark */}
                  <svg width="120" height="18" viewBox="0 0 120 18" className="mb-2">
                    <path d="M118 0H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h116c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm-2.5 15h-111C3.7 15 3 14.3 3 13.5v-9C3 3.7 3.7 3 4.5 3h111c.8 0 1.5.7 1.5 1.5v9c0 .8-.7 1.5-1.5 1.5z" fill="#000"/>
                    <path d="M10.7 11.8H7.8v-6h2.9c1.9 0 3.1 1.2 3.1 3s-1.2 3-3.1 3zm.2-4.6H9.2v3.1h1.7c1 0 1.6-.5 1.6-1.6 0-1-.6-1.5-1.6-1.5zm7.6 4.6h-3.4v-6h3.3c1.5 0 2.5.7 2.5 1.9 0 .8-.5 1.4-1.1 1.6.8.1 1.4.8 1.4 1.7 0 1.2-1 1.8-2.7 1.8zm0-4.6h-1.9v1.2h1.9c.5 0 .9-.2.9-.6 0-.5-.4-.6-.9-.6zm.1 2.6h-2v.7h2c.6 0 1-.2 1-.6 0-.5-.5-.7-1-.7v.6zm7.4 2v-6h-1.4v3.5l-2.4-3.5h-1.5v6h1.4V7.2l2.5 3.6h1.4zm5.3 0l-2.1-6h-1.6l-2.1 6h1.4l.4-1.3h2.1l.4 1.3h1.5zm-2.4-4.8l.7 2.2h-1.5l.8-2.2zm5.8 4.8v-6h-1.4v6h1.4zm4.7 0c1.9 0 3.1-1.2 3.1-3s-1.2-3-3.1-3h-2.9v6h2.9zm-.2-4.6c1 0 1.6.5 1.6 1.6 0 1-.6 1.5-1.6 1.5h-1.3V7.2h1.3zm8.8 4.6v-1.4h-3v-.9h2.7V8.1h-2.7v-.9h3V5.8h-4.4v6h4.4z" fill="#D5001C"/>
                    <path d="M66.4 11.8v-6H65v6h1.4zm7.1-6h-1.5l-2.4 3.5V5.8h-1.4v6h1.4v-1.4l.7-1 1.7 2.4h1.8l-2.5-3.6 2.2-3.4zm6.2 6v-1.4h-3v-.9h2.7V8.1h-2.7v-.9h3V5.8h-4.4v6h4.4zm7.8-6h-1.9l-1.3 4.5L83 5.8h-1.9v6h1.3v-4.6l1.4 4.6h1.2l1.4-4.6v4.6h1.3v-6h-.2zm8.1 6l-2.1-6h-1.6l-2.1 6h1.4l.4-1.3h2.1l.4 1.3h1.5zm-2.4-4.8l.7 2.2h-1.5l.8-2.2zm7.3 4.8v-6h-1.4v4.6h-2.3v1.4h3.7z" fill="#000"/>
                  </svg>
                  <div className="h-6 w-px bg-gray-300 mx-4"></div>
                  <span className="text-gray-600 font-light">Porsche Classic</span>
                </div>
              </div>
              <div className="text-gray-500 text-sm">
                <p className="uppercase tracking-wider font-medium">Porsche 928 Maintenance Tracker</p>
                <p className="mt-1 font-light">Precision in Engineering. Precision in Record Keeping.</p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                    <span className="sr-only">Support</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                    <span className="sr-only">Settings</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">
                    <span className="sr-only">Export</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <div className="h-px bg-gray-200 mb-4"></div>
              <p className="text-xs text-gray-500">© {new Date().getFullYear()} Dr. Ing. h.c. F. Porsche AG. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorscheExpenseDashboard;

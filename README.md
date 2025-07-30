# 🌍 Eco Tracker      

**Eco Tracker** is a simple web application to help users **calculate their daily carbon footprint** based on transport, electricity usage, and meat consumption.  
It provides **actionable tips** to reduce your emissions and live a greener life.  

---

## **Features**
- Input daily **transport distance (km)**, **electricity usage (kWh)**, and **meat consumption (kg)**.   
- Get **instant CO₂ emission calculations**.        
- Receive **personalized tips** to reduce your footprint.       
- Clean, **eco-friendly UI** with a green theme.     

---

## **Project Structure**    
eco-tracker/     
│
├── backend/ # Node.js + Express API   
├── frontend/ # HTML, CSS, JS frontend     
└── README.md # Documentation      

# **Tech Stack**     
- **Frontend:** HTML, CSS, JavaScript     
- **Backend:** Node.js, Express.js       
- **API:** Custom-built `/api/emissions` endpoint     


  Setup Backend     
  cd backend     
  npm install      
  node server.js


##Final Structure
  
  eco-tracker/          
│
├── backend/       
│   ├── server.js              # Express backend server                            
│   ├── routes/                                                            
│   │   └── emissions.js       # API route for calculating emissions                                                   
│   ├── package.json           # Backend dependencies                                                 
│   ├── package-lock.json      # Dependency lock file                                             
│   └── .gitignore             # Ignore node_modules & env files                                                
│                                                                            
├── frontend/                                                                                
│   ├── index.html             # Main webpage                                                              
│   ├── style.css              # Styling (green theme)                                                 
│   └── script.js              # API calls & frontend logic                                                    
│                                                                       
└── README.md                  # Project documentation                                                            

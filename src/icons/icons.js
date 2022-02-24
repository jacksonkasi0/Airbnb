import WifiIcon from '@mui/icons-material/Wifi';
import PetsIcon from '@mui/icons-material/Pets';
import TvRoundedIcon from '@mui/icons-material/TvRounded';
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import BalconyRoundedIcon from '@mui/icons-material/BalconyRounded';
import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded';
import DirectionsCarRoundedIcon from '@mui/icons-material/DirectionsCarRounded';
import SecurityRoundedIcon from '@mui/icons-material/SecurityRounded';
import BeachAccessRoundedIcon from '@mui/icons-material/BeachAccessRounded';
import YardRoundedIcon from '@mui/icons-material/YardRounded';
import PoolRoundedIcon from '@mui/icons-material/PoolRounded';
import FireExtinguisherRoundedIcon from '@mui/icons-material/FireExtinguisherRounded';
import MedicalServicesRoundedIcon from '@mui/icons-material/MedicalServicesRounded';
import WaterRoundedIcon from '@mui/icons-material/WaterRounded';
import LandscapeRoundedIcon from '@mui/icons-material/LandscapeRounded';
import KitchenRoundedIcon from '@mui/icons-material/KitchenRounded';
import SurfingRoundedIcon from '@mui/icons-material/SurfingRounded';
import LocalLaundryServiceRoundedIcon from '@mui/icons-material/LocalLaundryServiceRounded';
import AirRoundedIcon from '@mui/icons-material/AirRounded';
import BreakfastDiningRoundedIcon from '@mui/icons-material/BreakfastDiningRounded';

export const myIcons = (type)=>{
 
    let allIcons ={
        "Wifi":<WifiIcon/>,
        "TV":<TvRoundedIcon/>,
        "Lift":<KeyboardDoubleArrowUpRoundedIcon/>,
        "Air conditioning":<AcUnitRoundedIcon/>,
        "Patio or balcony":<BalconyRoundedIcon/>,
        "Kitchen":<LocalDiningRoundedIcon/>,
        "Free parking":<DirectionsCarRoundedIcon/>,
        "Pets allowed":<PetsIcon/>,
        "Security cameras":<SecurityRoundedIcon/>,
        "Resort view":<BeachAccessRoundedIcon/>,
        "Garden view":<YardRoundedIcon/>,
        "Shared outdoor pool":<PoolRoundedIcon/>,
        "Fire extinguisher":<FireExtinguisherRoundedIcon/>,
        "First aid kit":<MedicalServicesRoundedIcon/>,
        "Lake view":<WaterRoundedIcon/>,
        "Valley view":<LandscapeRoundedIcon/>,
        "Refrigerator":<KitchenRoundedIcon/>,
        "Beach access":<SurfingRoundedIcon/>,
        "Washing machine":<LocalLaundryServiceRoundedIcon/>,
        "Hair dryer":<AirRoundedIcon/>,
        "Breakfast":<BreakfastDiningRoundedIcon/>
    }

    return (allIcons[type] || allIcons["defaultIcon"])
}
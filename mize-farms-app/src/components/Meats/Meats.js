import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../images/Logo.jpg";
import { NavBar } from "../NavBar/NavBar";


const meats = [
  {
    name: "Mize Beef Box",
    image: "mize-beef-box.jpg",
    price: "$100",
  },
  {
    name: "Dry Aged Ground Beef",
    image: "dry-aged-ground-beef.jpg",
    price: "$39.95-$143.00",
  },
  {
    name: "Bone-In Ribeye Bundle",
    image: "bone-in-ribeye-bundle.jpg",
    price: "$159.94",
  },
  {
   name: "Medium Filet Bundle (Each Filet Between 8-11oz)",
   image: "medium-filet-bundle.jpg",
   price: "$119.94",
   },
   {
   name: "Mize Butchers Cut Box",
   image: "mize-butcher-cut-box.jpg",
   price: "$189.67",
   },
   {
      name: "Mize Week-night Meal Box",
      image: "mize-week-night-box.jpg",
      price: "$111.81",
    },
    {
      name: "Mize Burger Patties",
      image: "mize-burger-patties.jpg",
      price: "$20.25",
    },
    {
      name: "XL Filet Bundle",
      image: "xl-filet-bundle.jpg",
      price: "$147.94",
    },
    {
      name: "Short Rib",
      image: "short-rib.jpg",
      price: "$61.16",
    },
    {
      name: "Ny Strip Bundle",
      image: "ny-strip-bundle.jpg",
      price: "$123.94",
    },
    {
      name: "Mize Fiesta Box",
      image: "mize-fista-box.jpg",
      price: "$106.63",
    },
    {
      name: "Mize Bone Broth",
      image: "mize-bone-broth.jpg",
      price: "$9.00",
    },
    {
      name: "Kabob/Stew Meat",
      image: "kabob-stew-meat.jpg",
      price: "$39.95",
    },
    {
      name: "Cube Steak",
      image: "cube-steak.jpg",
      price: "$44.95",
    },
    {
      name: "Mize Smoked Salt/Pepper Blend",
      image: "mized-smoked-salt-pepper-blend.jpg",
      price: "$9.25",
    },
    {
      name: "Osso Bucco",
      image: "osso-bucco.jpg",
      price: "$37.40",
    },
    {
      name: "Bone-In PLate Short Ribs(Large)",
      image: "bone-in-plate-short-ribs-large.jpg",
      price: "$35.96",
    },
    {
      name: "Quarter Share Deposit",
      image: "quarter-share-deposit.jpg",
      price: "$250.00",
    },
    {
      name: "Half Cow Deposit",
      image: "half-cow-deposit.jpg",
      price: "$500.00",
    },
    {
      name: "Whole Cow Depost",
      image: "whole-cow.jpg",
      price: "$500.00",
    },
  // add more meats here
];

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  item: {
    width: "30%",
    margin: theme.spacing(2),
  },
  image: {
    width: "100%",
    height: "auto",
  },
}));

export default function Meats() {
  const classes = useStyles();

  return (
   <div>
     <NavBar />
    <Box component="main" p={3}>
      <Typography variant="h4" gutterBottom>
        Our Meats
      </Typography>
      <Box className={classes.container}>
      {meats.map((meat, index) => (
  <li key={index} className="product">
    <div className="entry-product">
      <div className="entry-featured">
        {/* Add image here */}
      </div>
         <div className="entry-wrap">
         <header className="entry-header">
            <h3>{meat.name}</h3>
               <span className="price">{meat.price}</span>
               <a href="#" className="button">Add to cart</a>
            </header>
            </div>
         </div>
      </li>
   ))}
      </Box>
    </Box>
    </div>
  );
}

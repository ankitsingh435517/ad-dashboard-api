import express from "express";

import {
  createCampaign,
  removeCampaign,
  updateCampaign,
  showCampaigns,
  showCampaignTypes,
  showCampaignProducts,
  createCampaignProduct
} from "../controllers";

const router = express.Router();

router.post("/campaign", createCampaign);

router.delete("/campaign/:id", removeCampaign);

router.patch("/campaign/:id", updateCampaign);

router.get("/campaign", showCampaigns);

router.get("/campaign/types", showCampaignTypes);

router.get("/campaign/products", showCampaignProducts);

router.post("/campaign/product", createCampaignProduct);

export default router;

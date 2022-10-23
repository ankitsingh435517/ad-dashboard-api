import { CampaignType, CampaignProduct, Campaign } from "../models";
import { CustomErrorHandler } from '../services';

const campaignControllers = {
  async create(req, res, next) {
    try{
      const campaign = new Campaign(req.body);

      await campaign.save();
      res.status(201).json({ campaign });
    }catch(err){
      next(err);
    }
  },

  async remove(req, res, next) {
    try{
      const campaign = await Campaign.findByIdAndRemove(req.params.id);
      if(!campaign){
        next(CustomErrorHandler.notFound());
      }

      res.status(200).json({
        message: 'Campaign deleted successfuly'
      })

    }catch(err){
      next(err);
    }
  },

  async update(req, res, next) {
    try{
      const campaign = await Campaign.findById(req.params.id);
      if(!campaign){
        next(CustomErrorHandler.notFound());
      }
      const updates = Object.keys(req.body);
      
      updates.forEach(update => campaign[update] = req.body[update]);

      await campaign.save();

      res.status(200).json({ campaign });
    }catch(err){
      next(err);
    }
  },

  async index(req, res, next) {
    try{
      const campaigns = await Campaign.find({});
      res.status(200).json({ campaigns })
    }catch(err){
      next(err);
    }
  },

  async showTypes(req, res, next) {
    try {
      const campaignTypes = await CampaignType.find({});
      res.status(200).json({
        campaignTypes,
      });
    } catch (err) {
      next(err);
    }
  },

  async showProducts(req, res, next) {
    try {
        const campaignProducts = await CampaignProduct.find({});
        res.status(200).json({
          campaignProducts,
        });
      } catch (err) {
        next(err);
      }
  },

  async createProduct(req, res, next){
    try{
      const campaignProduct = new CampaignProduct(req.body);

      await campaignProduct.save();
      res.status(201).json({ campaignProduct });
    }catch(err){
      next(err);
    }
  }
};

export default campaignControllers;

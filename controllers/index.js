import campaignController from './campaignController';

export const {
    create: createCampaign,
    remove: removeCampaign,
    update: updateCampaign,
    index: showCampaigns,
    showTypes: showCampaignTypes,
    showProducts: showCampaignProducts,
    createProduct: createCampaignProduct
} = campaignController;
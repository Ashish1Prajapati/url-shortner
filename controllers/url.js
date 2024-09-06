const { nanoid } = require("nanoid");
const URLModel = require("../models/url");
async function generateShortUrl(req, res) {
  try {
    const { url } = req.body;
    if (!url) {
      throw Error("Url is not provided");
    }
    const shortID = nanoid(8);
    await URLModel.create({
      shortId: shortID,
      redirectURl: url,
      visitHistory: [],
    });
    return res.status(201).json({
      id: shortID,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      success: false,
      timestamp: new Date().toISOString(),
    });
  }
}
async function redirectToUrl(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      throw Error("Id is not provided");
    }
    const entry = await URLModel.findOneAndUpdate(
      {
        shortId: id,
      },
      {
        $push: {
          visitHistory: { timestamp: Date.now() },
        },
      },
      {
        new: true,
      }
    );
    if (entry) {
      res.redirect(entry.redirectURl);
    } else {
      throw Error("No url present");
    }
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      success: false,
      timestamp: new Date().toISOString(),
    });
  }
}
async function getAnalytics(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      throw Error("Id is not provided");
    }
    const result = await URLModel.findOne({
      shortId: id,
    });
    if (!result) {
        throw Error("No url present");
    }
    return res.json({totalClicks:result.visitHistory.length,analitics:result.visitHistory})
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      success: false,
      timestamp: new Date().toISOString(),
    });
  }
}
module.exports = { generateShortUrl, redirectToUrl, getAnalytics };

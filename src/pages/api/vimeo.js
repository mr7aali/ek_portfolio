// pages/api/upload-video.js

import axios from "axios";



const client_id = "d24dcaeb3dc88a2bf748989314a3e9965ebac644";
const client_secret = "LYX3OrVeTeJUaw1Fc9jw55dHf0tcGBoh07RhUtZQ21YSvmIiyRRobtHIMONPWohrc0raQ82xyeynjvI9jU/loShYzYvVl0vmUtkdcMGodREL2EshTiLOOHaZWI5TMNk2";
const VIMEO_ACCESS_TOKEN  = "1b752cd271c744ce41cb1537aa7de2d2";
const VIMEO_API_URL = 'https://api.vimeo.com/me/videos';


const handler = async (req, res) => {
  if (req.method === 'POST') {
    const size = req.body.size;
    const body = {
      upload: {
        approach: 'tus',
        size,
      },
      privacy: {
        view: 'anybody',
        embed: 'public',
      },
      embed: {
        color: '#4338CA',
      },
    };
    const headers = {
      Authorization: `bearer ${VIMEO_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
      Accept: 'application/vnd.vimeo.*+json;version=3.4',
    };
    const response = await axios.post(
      VIMEO_API_URL,
      body,
      { headers }
    );

    res.status(200).json(response.data);
  } else {
    res.status(403).json({ error: 'Not allowed method' });
  }
};

export default handler;
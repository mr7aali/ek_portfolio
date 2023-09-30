
import axios from 'axios';
// import loadConfig from 'next/dist/server/config';

const VIMEO_ACCESS_TOKEN = 'fac63054257a6ba08e88dc133d0dfb03';
const VIMEO_API_URL = 'https://api.vimeo.com/me/videos';

const handler = async (req ,res) => {
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
   console.log(response);
    res.status(200).json(response.data);
  } else {
    res.status(403).json({ error: 'Not allowed method' });
  }
};

export default handler;
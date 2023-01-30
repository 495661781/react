import request from '../utils/request';

export const getArticleByIdAPI = (channel_id) => {
  return request({
    url: '/v1_0/articles',
    params: {
      channel_id,
      timestamp: Date.now(),
    },
  });
};

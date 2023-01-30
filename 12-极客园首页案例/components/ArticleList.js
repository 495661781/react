import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticleAction } from '../store/action/article';

// 目标：设置本地图片的src路径
// 1. 使用JS的方式导入图片
import imgSrc from '../assets/defaultCover.jpg';

export default function ArticleList() {
  const { currentId } = useSelector((state) => state.channel);
  const { list } = useSelector((state) => state.article);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticleAction(currentId));
  }, [dispatch, currentId]);
  return (
    <div className="list">
      {list.map((item) => {
        return (
          <div key={item.art_id} className="article_item">
            <h3 className="van-ellipsis">{item.title}</h3>
            <div className="img_box">
              <img
                // 2. 设置src
                src={item.cover.type === 0 ? imgSrc : item.cover.images[0]}
                className="w100"
                alt=""
              />
            </div>
            <div className="info_box">
              <span>{item.aut_name}</span>
              <span>{item.comm_count}评论</span>
              <span>{item.pubdate}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

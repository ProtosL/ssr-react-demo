import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHomeData } from '../store/actions/home';

const Home = () => {
    const dispatch = useDispatch();
    const homeData = useSelector((state) => state.home);

    useEffect(() => {
        dispatch(fetchHomeData)
    }, [])

    const handleClick = () => {
        console.log('click');
    }

    return (
        <div>
            <h1>home</h1>
            <ul>
                {
                    homeData?.articles?.map(article => (
                        <li key={article.id}>
                            <p>文章标题：{article.title}</p>
                            <p>文章内容：{article.content}</p>
                        </li>
                    ))
                }
            </ul>
            <button onClick={handleClick}>click me</button>
        </div>
    )
};

export default Home;
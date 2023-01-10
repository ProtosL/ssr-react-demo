import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHomeData } from '../store/actions/home';

const Home = () => {
    const dispatch = useDispatch();
    const homeData = useSelector((state) => state.home);

    // CSR 获取数据
    useEffect(() => {
        dispatch(fetchHomeData)
    }, [])

    const handleClick = () => {
        console.log('click');
    }

    const renderHeader = () => {
        return (
            <Helmet>
                <title>主页</title>
            </Helmet>
        )
    }

    return (
        <div>
            {renderHeader()}
            <h1>主页</h1>
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

// SSR 数据获取
Home.getInitialData = async (store) => {
    return store.dispatch(fetchHomeData)
}

export default Home;
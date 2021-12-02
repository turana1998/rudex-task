import React from 'react'
import Header from '../components/Header'
import BlogListPage from '../components/BlogListPage'
import BlogDetailsPage from '../components/BlogDetailsPage'
import ContactPage from '../components/ContactPage'
import NotFoundPage from '../components/NotFoundPage'

import { BrowserRouter, Route } from 'react-router-dom'
import AddBlogPage from '../components/AddBlogPage'
import EditBlogPage from '../components/EditBlogPage'


const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header></Header>
               
                    <Route path="/" component={BlogListPage} exact/>
                    <Route path="/blogs" component={BlogListPage} exact/>
                    <Route path="/create" component={AddBlogPage}/>
                    <Route path="/edit/:id" component={EditBlogPage}/>
                    <Route path="/blogs/:id" component={BlogDetailsPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route component={NotFoundPage} />
                
            </div>
        </BrowserRouter>
    )
}

export default AppRouter

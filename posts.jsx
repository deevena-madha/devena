import React, { Component } from "react";
import axios from "axios";
import Pagination from "./pagination";
import PostsTable from "./posts-table";
import http from "../services/httpservice";
import { toast } from "react-toastify";
import Spinner from "./spinner";
import Paginitaion from "./pagination";

import _ from "lodash";
const baseUrl = "https://jsonplaceholder.typicode.com";
axios.interceptors.response.use(null, error => {
    const expectedErrors =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedErrors) {
        alert("Unknown Error");
    }
});
class Posts extends Component {
    constructor() {
        super();
        console.log("inside constructor");
    }
    state = {
        posts: [],
        pageSize: 6,
        selectedPage: 1
    };
    handlePageSelect = page => {
        this.setState({ selectedPage: page });
    };

    componentWillMount() {
        console.log("inside componentWillUnmount");
    }
    async componentDidMount() {
        console.log("inside componentDidMount");
        const promise = await http.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(promise);
        this.setState({ posts: promise.data, loading: false });
        console.log("state", this.state.posts);
    }
    componentDidUpdate() {
        console.log("inside componentDidUpdate");
    }
    addPost = async () => {
        console.log("Inside addPost");
        const obj = {
            id: 101,
            userId: 200,
            title: "New title",
            body: "dnskmxnxsikxockkalncdd"
        };
        const response = await http.post(baseUrl + "/posts", obj);
        console.log(response.data);
        const posts = [obj, ...this.state.posts];
        this.setState({ posts });
        console.log(this.state.posts);
    };
    deletePost = async post => {
        const originalPosts = this.state.posts;
        const posts = this.state.posts.filter(p => p.id !== post.id);
        this.setState({ posts });
        try {
            await http.delete(baseUrl + "/pos/" + post.id);
        } catch (err) {
            console.log("Error:", err);
            if (err.response && err.response.status == 200) {
                alert("post has been deleted");
            } else {
                alert("Failed to delete due to unknown error");
                this.setState({ posts: originalPosts });
            }
        }
    };
    updatePost = async post => {
        console.log(post);
        post.title = "New title";
        const response = await http.put(baseUrl + "/posts/" + post.id, post);
        // axios.patch(baseUrl+"/posts/"+post.id,{title: "New Title"});
        console.log(response);
        const indx = this.state.posts.indexOf(post);
        const posts = this.state.posts;
        posts[indx] = response.data;
        this.setState({ posts });
    };
    handleInputField = () => {
        console.log("Inside handleInputField");
    };
    /*component life cycle methods
          constructor()-instance creation
          render()-
      componentDidMount-component loading
      componentDidUpdate-updating component
      componentWillUnmount-component close
      */
    paginate = (items, pageNumber, pageSize) => {
        const startIndex = (pageNumber - 1) * pageSize;
        return _(items) // converts items into lodash obj
            .slice(startIndex)
            .take(pageSize)
            .value();
    };

    render() {
        console.log("inside render");
        const paginatedPosts = this.paginate(
            this.state.posts,
            this.state.selectedPage,
            this.state.pageSize
        );
        return (
            <div>
                {this.state.loading && <Spinner />}
                <PostsTable
                    deletePost={this.deletePost}
                    updatePost={this.updatePost}
                    addPost={this.addPost}
                    posts={paginatedPosts}
                    getpost={this.state.post}
                    post={this.state.post}
                    handleInputField={this.handleInputField}
                />
                <Pagination
                    pageSize={this.state.pageSize}
                    total={this.state.posts.length}
                    selectedPage={this.state.selectedPage}
                    handleInputField={this.handleInputField}
                    handleInputField={this.handlePageSelect}
                />
            </div>
        );
    }
}

export default Posts;
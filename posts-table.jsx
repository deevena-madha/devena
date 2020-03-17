import React, { component } from "react";
import Input from "./input";
const PostsTable = props => {
    const { posts, updatePost, deletePost, addPost, post } = props;
    //const {posts} = posts
    console.log(post);
    return (
        <div>
            <table className="table">
                <button onClick={() => addPost(post)} className="btn btn-secondary">
                    AddPost
        </button>
                <thead>
                    <tr className="table-primary">
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                            <td>
                                <td>
                                    <button
                                        onClick={() => updatePost(post)}
                                        className="btn btn-primary"
                                    >
                                        Update
                  </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => deletePost(post)}
                                        className="btn btn-danger"
                                    >
                                        Delete
                  </button>
                                </td>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PostsTable;

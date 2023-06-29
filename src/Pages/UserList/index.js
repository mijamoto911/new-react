import React, { useState, useEffect } from "react";
import "./style.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const fetchAlbums = async (userId) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
      );
      const data = await response.json();
      setAlbums(data);
      setPhotos([]);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const fetchPhotos = async (albumId) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
      );
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const fetchUserDetails = async (userId) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await response.json();
      setSelectedUser(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleAlbumClick = async (userId) => {
    fetchPhotos(userId);
  };

  return (
    <div className="container-list">
      <h1>User List</h1>
      {selectedUser && (
        <div>
          <h2>User Details</h2>
          <p>Email: {selectedUser.email}</p>
          <p>Username: {selectedUser.username}</p>
          <p>
            Address: {selectedUser.address.street}, {selectedUser.address.city}
          </p>
        </div>
      )}
      <div>
        <select
          className="select"
          onChange={(e) => fetchAlbums(e.target.value)}
        >
          <option>Select User</option>
          {users.map((user) => (
            <option
              key={user.id}
              value={user.id}
              onClick={() => fetchUserDetails(user.id)}
            >
              {user.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        {albums.map((album) => (
          <div key={album.albumId}>
            <h2>{album.title}</h2>
            <button onClick={() => handleAlbumClick(album.id)}>Photos</button>
            {photos.length > 0 &&
              photos.map((photo) => (
                <div key={photo.id}>
                  <img src={photo.thumbnailUrl} alt={photo.title} />
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;

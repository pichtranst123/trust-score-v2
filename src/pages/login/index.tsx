import React, { useState, useEffect } from "react";

const UserPage = () => {
  const [user, setUser] = useState<{ name: string; email: string }>();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/users/me`);
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  if (!user) {
    return <p>Bạn chưa đăng nhập</p>;
  }

  return (
    <div>
      <h1>Xin chào {user.name}</h1>
      <p>Đây là trang người dùng của bạn</p>
    </div>
  );
};

export default UserPage;
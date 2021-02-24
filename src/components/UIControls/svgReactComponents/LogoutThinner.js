import * as React from "react";

function SvgLogoutThinner(props) {
  return (
    <svg
      height={512}
      viewBox="0 0 24 24"
      width={512}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13.5 21h-4a.5.5 0 010-1h4c.827 0 1.5-.673 1.5-1.5v-5a.5.5 0 011 0v5c0 1.378-1.121 2.5-2.5 2.5zM23.5 11h-10a.5.5 0 010-1h10a.5.5 0 010 1z" />
      <path d="M8 24c-.22 0-.435-.037-.638-.109l-5.99-1.997A1.998 1.998 0 010 20V2C0 .897.897 0 2 0c.222 0 .438.037.639.11l5.989 1.996A1.996 1.996 0 0110 4v18c0 1.103-.897 2-2 2zM2 1c-.552 0-1 .449-1 1v18a1 1 0 00.688.946l6 2C8.344 23.179 9 22.654 9 22V4a.996.996 0 00-.688-.945l-6-2A.92.92 0 002 1z" />
      <path d="M15.5 8a.5.5 0 01-.5-.5v-5c0-.827-.673-1.5-1.5-1.5H2a.5.5 0 010-1h11.5C14.879 0 16 1.122 16 2.5v5a.5.5 0 01-.5.5zM19.5 15a.5.5 0 01-.354-.853l3.646-3.646-3.646-3.646a.5.5 0 01.707-.707l4 4a.5.5 0 010 .707l-4 4A.501.501 0 0119.5 15z" />
    </svg>
  );
}

export default SvgLogoutThinner;
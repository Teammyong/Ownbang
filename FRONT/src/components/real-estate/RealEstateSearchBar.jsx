import React, { useState } from "react";
import { Input, Button } from "@mui/material";
import { useTheme } from "@emotion/react";

const RealEstateSearchBar = ({ onSearch }) => {
  const theme = useTheme();
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSearchInputValue = () => {
    // 검색어를 다른 함수로 전달
    if (onSearch) {
      onSearch(inputValue);
    }
    // 검색 후 입력 창 비우기
    setInputValue("");
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearchInputValue();
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Input
        className="searchInputValue"
        type="text"
        placeholder="검색어를 입력하세요."
        value={inputValue}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        disableUnderline // 기본 CSS에 있는 밑줄 제거
        sx={{
          marginRight: "8px",
          borderRadius: "7px", // 둥근 사각형 모양
          border: "1px solid lightgray", // 연한 회색 테두리
          padding: "10px 25px",
          backgroundColor: theme.palette.common.white,
        }}
      />
      <Button
        variant="contained"
        onClick={onSearchInputValue}
        sx={{
          marginRight: "8px",
          borderRadius: "7px", // 둥근 사각형 모양
          padding: "13px 15px",
          backgroundColor: theme.palette.primary.dark,
        }}
      >
        검색
      </Button>
    </div>
  );
};

export default RealEstateSearchBar;
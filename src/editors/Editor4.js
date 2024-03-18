import React, { useState } from "react";
import ReactQuill from "react-quill";

import { BACKGROUND_COLORS, FORMATS, LOREM } from "./constants";
import { Label, ShevronLeftSmall, ShevronRightSmall } from "../icons/index";

function CustomToolbar() {
  const pinnedColor = Number(localStorage.getItem("ts_goal_highlight_color"));
  const [colorsVisibility, setColorsVisibility] = useState(false);

  function handleColorSelect(value) {
    localStorage.setItem("ts_goal_highlight_color", value);
    setColorsVisibility(false);
  }

  function handleShowMoreColors() {
    setColorsVisibility(!colorsVisibility);
  }

  return (
    <div id="toolbar2">
      <span className="ql-formats">
        <button class="ql-bold"></button>
        <button class="ql-italic"></button>
      </span>
      <span className="ql-formats">
        <button class="ql-list" value="ordered"></button>
        <button class="ql-list" value="bullet"></button>
        <button type="button" class="ql-task"></button>
      </span>
      <span class="ql-formats">
        <button type="button" class="ql-header"></button>
        <button type="button" class="ql-blockquote">
          <svg viewBox="0 0 18 18">
            {" "}
            <rect
              class="ql-fill ql-stroke"
              height="3"
              width="3"
              x="4"
              y="5"
            ></rect>{" "}
            <rect
              class="ql-fill ql-stroke"
              height="3"
              width="3"
              x="11"
              y="5"
            ></rect>{" "}
            <path
              class="ql-even ql-fill ql-stroke"
              d="M7,8c0,4.031-3,5-3,5"
            ></path>{" "}
            <path
              class="ql-even ql-fill ql-stroke"
              d="M14,8c0,4.031-3,5-3,5"
            ></path>{" "}
          </svg>
        </button>
        <button type="button" class="ql-code-block">
          <svg viewBox="0 0 18 18">
            {" "}
            <polyline
              class="ql-even ql-stroke"
              points="5 7 3 9 5 11"
            ></polyline>{" "}
            <polyline
              class="ql-even ql-stroke"
              points="13 7 15 9 13 11"
            ></polyline>{" "}
            <line class="ql-stroke" x1="10" x2="8" y1="5" y2="13"></line>{" "}
          </svg>
        </button>
      </span>
      <span class="ql-formats">
        <button type="button" class="ql-link">
          <svg viewBox="0 0 18 18">
            {" "}
            <line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"></line>{" "}
            <path
              class="ql-even ql-stroke"
              d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"
            ></path>{" "}
            <path
              class="ql-even ql-stroke"
              d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"
            ></path>{" "}
          </svg>
        </button>
      </span>
      <span className="ql-formats ql-highlight">
        {BACKGROUND_COLORS.map((color, index) => {
          const isVisible = pinnedColor === index || colorsVisibility;
          return (
            <button
              className={`ql-highlightText highlightItem ${
                isVisible ? "" : "_hidden"
              }`}
              data-value={color}
              value={color}
              onClick={() => handleColorSelect(index)}
            >
              <div
                tabindex="0"
                role="button"
                class="ql-picker-item ql-selected ql-primary"
                style={{ border: "0.5px solid #888", backgroundColor: color }}
              ></div>
            </button>
          );
        })}
        <button
          className={`ql-custom ${pinnedColor === null ? "highlightItem" : ""}`}
          onClick={handleShowMoreColors}
        >
          {colorsVisibility ? (
            <ShevronLeftSmall />
          ) : pinnedColor === null ? (
            <Label />
          ) : (
            <ShevronRightSmall />
          )}
        </button>
      </span>
    </div>
  );
}

export default function Editor4() {
  function highlightClickHandler(value) {
    this.quill.format("background", value);
  }

  return (
    <div className="text-editor">
      <CustomToolbar />
      <ReactQuill
        value={LOREM}
        formats={FORMATS}
        modules={{
          toolbar: {
            container: "#toolbar2",
            handlers: {
              highlightText: highlightClickHandler,
            },
          },
        }}
      />
    </div>
  );
}

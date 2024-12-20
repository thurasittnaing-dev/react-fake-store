import React from 'react'

export default function GallaryButtons({handleCategoryChange,activeCategory}) {
  return (
    <>
          <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
            <button onClick={() => handleCategoryChange("")} type="button" className={activeCategory == "" ? "active-gallary-btn" : "gallary-btn"}>All categories</button>

            <button onClick={() => handleCategoryChange("men's%20clothing")} type="button" className={activeCategory == "men's%20clothing" ? "active-gallary-btn" : "gallary-btn"}>Men's clothing</button>

            <button onClick={() => handleCategoryChange("women's%20clothing")} type="button" className={activeCategory == "women's%20clothing" ? "active-gallary-btn" : "gallary-btn"}>Women's clothing</button>

            <button onClick={() => handleCategoryChange("jewelery")} type="button" className={activeCategory == "jewelery" ? "active-gallary-btn" : "gallary-btn"}>Jewelery</button>

            <button onClick={() => handleCategoryChange("electronics")} type="button" className={activeCategory == "electronics" ? "active-gallary-btn" : "gallary-btn"}>Electronics</button>
        </div>
    </>
  )
}

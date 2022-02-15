import React from "react";
import Technique from "./Technique";
import Presentation from "./Presentation";
import ReactPageScroller from "react-page-scroller";


const Geneaka = () => {
    return(
        <ReactPageScroller>
            <Presentation />
            <Technique />
        </ReactPageScroller>
    )
}

export default Geneaka;
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background: white;
  height: 82vh;

  .parameters {
    width: 75%;
  }

  .details {
    width: 25%;
  }

  .stay {
    position: fixed;
    background: #f7f7f7;
    width: 24%;
    height: 40px;
    display: flex;
    align-items: center;
  }

  .first {
    margin-top: 40px;
  }

  .head-group {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 5px;
    margin-top: 15px;
  }

  .data-wrap {
    border-bottom: 1px solid #dcd7d7;
    padding-bottom: 5px;
  }

  .head-item {
    margin-left: 15px;
    font-size: 13px;
    font-weight: 600;
  }
  .body-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 100%;
    border-top: 1px solid #dcd7d7;
  }

  .col-1 {
   height: 94%;
    border-right: 1px solid #dcd7d7;
    overflow-y: auto;
  }
  .col-2 {
    height: 94%;
    border-right: 1px solid #dcd7d7;
    overflow-y: auto;
  }
  .col-3 {
    height: 94%;
    overflow-y: auto;
  }

  .body-item {
    font-size: 13px;
    font-weight: 400;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    line-break: auto;
    cursor: pointer;
    color: #252525;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    min-height: 100px;
  }

  .details {
    background: #f7f7f7;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    position: relative;
    overflow-y: auto;
    height: 97%;
  }

  .col-1-active {
    background: #edf5ea;
    font-weight: 500;
    color: black;
  }
  .col-2-active {
    background: #edf5ea;
    font-weight: 500;
    color: black;
  }
  .col-3-active {
    background: #edf5ea;
    font-weight: 500;
    color: black;
  }

  .detail-title {
    font-size: 12px;
    font-weight: 600;
  }

  .txt-area {
    width: 80%;
  }

  .light-title {
    margin-top: 10px;
    font-size: 12px;
    margin-bottom: 4px;
    color: #404244;
  }

  .detail-data {
    font-size: 13px;
    color: black;
    margin-bottom: 15px;
  }

  .arrow-wrap {
    margin-left: 10px;
}

.arrow {
  font-size: 10px;
}
`
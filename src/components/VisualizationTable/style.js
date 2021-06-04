import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background: white;

  .parameters {
    width: 75%;
  }

  .details {
    width: 25%;
  }

  .head-group {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 5px;
    margin-top: 15px;
  }

  .head-item {
    margin-left: 15px;
    font-size: 11px;
    font-weight: 600;
  }
  .body-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 100%;
    border-top: 1px solid #dcd7d7;
  }

  .col-1 {
    height: 96%;
    border-right: 1px solid #dcd7d7;
  }
  .col-2 {
    height: 96%;
    border-right: 1px solid #dcd7d7;
  }
  .col-3 {
    height: 100%;
  }

  .body-item {
    font-size: 11px;
    font-weight: 400;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    line-break: auto;
    cursor: pointer;
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    min-height: 100px;
  }

  .details {
    background: #f7f7f7;
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
  }

  .col-1-active {
    background: #edf5ea;
    font-weight: 600;
    color: black;
  }
  .col-2-active {
    background: #edf5ea;
    font-weight: 600;
    color: black;
  }
  .col-3-active {
    background: #edf5ea;
    font-weight: 600;
    color: black;
  }

  .detail-title {
    font-size: 10px;
    font-weight: 600;
  }

  .light-title {
    margin-top: 10px;
    font-size: 11px;
    margin-bottom: 4px;
    color: #404244;
  }

  .detail-data {
    font-size: 10px;
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
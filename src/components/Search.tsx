import {FC, RefObject, useEffect, useRef} from "react";
import type {ComponentPropsWithRef} from "react";
import styled from "styled-components";

const Container = styled.section`
  @media (min-width: 961px) {
    top: 0;
    right: 66px;
    width: 400px;
    padding-bottom: 44px;
    border-radius: 12px;
    border: 1px solid var(--d_300);
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
    &::before {
      content: '';
      position: absolute;
      top: 64px;
      width: 100%;
      height: 1px;
      background: var(--d_300);
    }
  }

  position: absolute;
  z-index: 6;
  box-sizing: border-box;
  text-align: left;
  line-height: 1;
  background: var(--b_100);
`

const SearchInput = styled.input`
  @media (min-width: 961px) {
    margin: 20px;
    width: calc(100% - 120px);
    font-size: 18px;
    line-height: 1.35;
  }
  color: var(--t_100);
  border: 0;
  outline: 0;
  border-radius: 0;
  appearance: none;

  &::placeholder {
    color: var(--t_600);
    font-size: 19px;
  }
`

const SearchBtn = styled.button`
  position: absolute;
  color: transparent;
  overflow: hidden;
  border: 0;
  @media (min-width: 961px) {
    top: 12px;
    right: 16px;
    width: 36px;
    height: 40px;
    background: url(//ccdn.lezhin.com/files/assets/img/btn-32-search.svg) no-repeat 50% / 32px;
  }
`

const Result = styled.div`
  display: block;
  overflow-y: auto;
  @media (min-width: 961px) {
    max-height: calc(100vh - 200px);
  }
`
type Props = {
    hide: () => void;
    btnRef: RefObject<HTMLButtonElement>;
    hidden: boolean;
} & ComponentPropsWithRef<'section'>;

const Search: FC<Props> = ({btnRef, hide, hidden}) => {
    const containerRef = useRef<HTMLElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node) &&
                btnRef.current && !btnRef.current.contains(event.target as Node)
            ) {
                hide();
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [btnRef, hide]);
    return (
        <Container hidden={hidden} ref={containerRef}>
            <SearchInput autoFocus={hidden} placeholder="작품, 작가, 출판사, 태그 검색" maxLength={50}/>
            <SearchBtn/>
        </Container>
    )
}

export default Search;

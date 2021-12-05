import {
  GoTriangleDown,
  GoTriangleLeft,
  GoTriangleRight,
  GoTriangleUp
} from 'react-icons/go';
import { IoArrowBack } from 'react-icons/io5';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

const $arrowDown = GoTriangleDown;
const $arrowLeft = GoTriangleLeft;
const $arrowRight = GoTriangleRight;
const $arrowUp = GoTriangleUp;
const $back = IoArrowBack;
const $starFull = AiFillStar;
const $starEmpty = AiOutlineStar;
const $flagFull = FaBookmark;
const $flagEmpty = FaRegBookmark;

export const ICON_TYPE = {
  arrowDownNavy: $arrowDown,
  arrowLeftNavy: $arrowLeft,
  arrowRightNavy: $arrowRight,
  arrowUpNavy: $arrowUp,
  arrowDownWhite: $arrowDown,
  arrowLeftWhite: $arrowLeft,
  arrowRightWhite: $arrowRight,
  arrowUpWhite: $arrowUp,
  back: $back,
  starFull: $starFull,
  starEmpty: $starEmpty,
  flagFull: $flagFull,
  flagEmpty: $flagEmpty
};

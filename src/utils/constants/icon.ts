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

const ICON_NAME = {
  ARROW_DOWN_NAVY: 'arrowDownNavy',
  ARROW_LEFT_NAVY: 'arrowLeftNavy',
  ARROW_RIGHT_NAVY: 'arrowRightNavy',
  ARROW_UP_NAVY: 'arrowUpNavy',
  ARROW_DOWN_WHITE: 'arrowDownWhite',
  ARROW_LEFT_WHITE: 'arrowLeftWhite',
  ARROW_RIGHT_WHITE: 'arrowRightWhite',
  ARROW_UP_WHITE: 'arrowUpWhite',
  BACK: 'back',
  STAR_FULL: 'starFull',
  STAR_EMPTY: 'starEmpty',
  FLAG_FULL: 'flagFull',
  FLAG_EMPTY: 'flagEmpty'
} as const;

const ICON_TOGGLE_TYPE = {
  STAR: 'star',
  FLAG: 'flag'
} as const;

const ICON_TYPES = {
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
} as const;

export { ICON_NAME, ICON_TYPES, ICON_TOGGLE_TYPE };

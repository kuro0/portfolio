$(function(){
    .cr-container input:checked ~ .cr-bgimg div span{
	animation: slideOut 0.6s ease-in-out;
}
@keyframes slideOut{
	0%{
		left: 0px;
	}
	100%{
		left: 150px;
	}
};
});
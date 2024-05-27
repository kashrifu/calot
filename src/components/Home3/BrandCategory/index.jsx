
import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
SwiperCore.use([ Autoplay, EffectFade, Navigation, Pagination]);
function index() {
    const settings = useMemo(()=>{
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 25,
            autoplay: {
              delay: 3000, // Autoplay duration in milliseconds
              disableOnInteraction: false,
            },
            navigation: {
              nextEl: ".next-5",
              prevEl: ".prev-5",
            },

            breakpoints: {
              280: {
                slidesPerView: 1,
              },
              386: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1400: {
                slidesPerView: 4
              },
            }
                }
          })
  return (
    <div className="brand-category-section pt-100 mb-100">
      <div className="container">
        <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12 d-flex align-items-end justify-content-between gap-3 flex-wrap">
            <div className="section-title-2">
              <h2>Brand Category</h2>
              <p>There has 30+ Brand Category Available</p>
            </div>      
            <div className="slider-btn-group2">
              <div className="slider-btn prev-5">
                <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                </svg>
              </div>
              <div className="slider-btn next-5">
                <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                </svg>
              </div>
            </div> 
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-12">
            <Swiper {...settings} className="swiper brand-category-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="brand-category-card">
                    <div className="category-img">
                      <img src="assets/img/home3/toyota.png" alt="" />
                    </div>
                    <div className="batch">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                          <mask id="mask0_878_5200" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={14} height={14}>
                            <rect width={14} height={14} fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_878_5200)">
                            <path d="M10.6178 5.87725C10.6178 3.80129 8.91625 2.11456 6.82879 2.11456C4.74133 2.11456 3.03976 3.80129 3.03976 5.87725C3.03976 7.9502 4.73829 9.63994 6.82879 9.63994C8.91929 9.63994 10.6178 7.9502 10.6178 5.87725ZM6.82879 9.15414C5.00872 9.15414 3.52593 7.68467 3.52593 5.87424C3.52593 4.0638 5.00872 2.59735 6.82879 2.59735C8.64886 2.59735 10.1317 4.06682 10.1317 5.87725C10.1317 7.68769 8.64886 9.15414 6.82879 9.15414Z" />
                            <path d="M11.4716 9.76961C11.6083 9.70021 11.7299 9.60969 11.8241 9.48296C12.0702 9.14803 12.0125 8.71051 11.9578 8.28506C11.9213 8.01047 11.8849 7.72382 11.9487 7.53071C12.0064 7.34966 12.2009 7.1475 12.3862 6.95439C12.6749 6.65265 13 6.31168 13 5.88019C13 5.44871 12.6779 5.10171 12.3892 4.79997C12.2039 4.60384 12.0094 4.40469 11.9517 4.22364C11.8879 4.03053 11.9244 3.74388 11.9608 3.4693C12.0155 3.04384 12.0702 2.60632 11.8271 2.27139C11.581 1.93344 11.1404 1.85197 10.715 1.7705C10.4416 1.71921 10.159 1.66791 9.99794 1.55023C9.83689 1.43557 9.7032 1.18815 9.57254 0.946754C9.37504 0.584667 9.14715 0.174301 8.74303 0.0415357C8.3541 -0.0851949 7.95605 0.101884 7.57016 0.282927C7.31189 0.403623 7.04754 0.527336 6.83484 0.527336C6.62215 0.527336 6.3578 0.403623 6.09952 0.282927C5.71363 0.101884 5.31558 -0.0851949 4.92665 0.0415357C4.51949 0.171284 4.3068 0.566562 4.09714 0.946754C3.96648 1.18513 3.82975 1.43557 3.67175 1.55023C3.50767 1.66791 3.22812 1.72222 2.95466 1.7705C2.52927 1.84895 2.08868 1.93344 1.84256 2.27139C1.59644 2.60632 1.65417 3.04384 1.70887 3.4693C1.74533 3.74388 1.78179 4.03053 1.71798 4.22364C1.66025 4.40469 1.46579 4.60685 1.28044 4.79997C0.991778 5.10171 0.666656 5.44267 0.666656 5.87416C0.666656 6.30565 0.994816 6.64661 1.28044 6.94835C1.46579 7.14448 1.66025 7.34363 1.71798 7.52467C1.78179 7.71779 1.74533 8.00444 1.70887 8.27902C1.65417 8.70447 1.59948 9.142 1.84256 9.47693C1.93676 9.60366 2.0583 9.6972 2.19503 9.76358L0.870237 12.0417C0.821621 12.1262 0.827698 12.2318 0.888468 12.3103C0.949238 12.3887 1.04951 12.4219 1.1437 12.3978L3.10051 11.8758L3.62617 13.819C3.65048 13.9125 3.73252 13.9819 3.82975 13.997C3.84191 13.997 3.85102 14 3.86014 14C3.94521 14 4.02725 13.9547 4.06979 13.8793L5.31255 11.74C5.5769 11.7098 5.84429 11.5861 6.10256 11.4654C6.36083 11.3447 6.62518 11.221 6.83788 11.221C7.05058 11.221 7.31493 11.3447 7.5732 11.4654C7.83148 11.5861 8.09886 11.7128 8.36322 11.74L9.60597 13.8793C9.64851 13.9547 9.73055 14 9.81563 14C9.82474 14 9.83689 14 9.84601 13.997C9.94324 13.9849 10.0222 13.9155 10.0496 13.819L10.5753 11.8758L12.5321 12.3978C12.6263 12.4219 12.7265 12.3887 12.7873 12.3103C12.8481 12.2318 12.8541 12.1262 12.8055 12.0417L11.4716 9.76961ZM3.93306 13.137L3.49855 11.5227C3.46513 11.393 3.33143 11.3175 3.20078 11.3507L1.57517 11.7822L2.65688 9.92048C2.75108 9.94161 2.84831 9.95971 2.94554 9.97781C3.21901 10.0291 3.50159 10.0804 3.66263 10.1981C3.82367 10.3127 3.95737 10.5602 4.08802 10.8016C4.26426 11.1244 4.46176 11.4835 4.78992 11.6525L3.93306 13.137ZM6.82877 10.7412C6.50668 10.7412 6.19068 10.8891 5.88683 11.0309C5.58601 11.1727 5.27608 11.3175 5.0725 11.2512C4.85069 11.1787 4.68357 10.871 4.51949 10.5753C4.36149 10.2886 4.20045 9.9929 3.95129 9.81186C3.69909 9.63081 3.36182 9.56745 3.0367 9.5071C2.7055 9.44374 2.36215 9.38037 2.22541 9.19933C2.09476 9.0213 2.1373 8.67732 2.17984 8.34842C2.22238 8.01953 2.26492 7.68158 2.16768 7.38286C2.07349 7.09922 1.84256 6.85481 1.62075 6.62247C1.38375 6.37505 1.13763 6.11857 1.13763 5.88019C1.13763 5.64182 1.38375 5.38534 1.62075 5.13791C1.8456 4.90256 2.07653 4.66117 2.16768 4.37753C2.26492 4.07881 2.22238 3.74086 2.17984 3.41196C2.1373 3.08005 2.09476 2.73909 2.22541 2.56106C2.35911 2.377 2.70246 2.31363 3.0367 2.25329C3.36182 2.19294 3.69909 2.12957 3.95129 1.94853C4.20045 1.7705 4.36149 1.47178 4.51949 1.18513C4.68357 0.886406 4.85069 0.581649 5.0725 0.509232C5.27912 0.442849 5.58905 0.587684 5.88683 0.729501C6.19068 0.871319 6.50668 1.01917 6.82877 1.01917C7.15085 1.01917 7.46685 0.871319 7.77071 0.729501C8.07152 0.587684 8.38145 0.442849 8.58503 0.509232C8.80684 0.581649 8.97396 0.889423 9.13804 1.18513C9.29604 1.47178 9.45708 1.76749 9.70624 1.94853C9.95844 2.12957 10.2957 2.19294 10.6208 2.25329C10.952 2.31665 11.2954 2.38002 11.4321 2.56106C11.5628 2.73909 11.5202 3.08307 11.4777 3.41196C11.4352 3.74086 11.3926 4.07881 11.4898 4.37753C11.584 4.66117 11.815 4.90557 12.0368 5.13791C12.2738 5.38534 12.5199 5.64182 12.5199 5.88019C12.5199 6.11857 12.2738 6.37505 12.0368 6.62247C11.8119 6.85783 11.581 7.09922 11.4898 7.38286C11.3926 7.68158 11.4352 8.01953 11.4777 8.34842C11.5202 8.68034 11.5628 9.0213 11.4321 9.19933C11.2984 9.38339 10.9551 9.44675 10.6208 9.5071C10.2957 9.56745 9.95844 9.63081 9.70624 9.81186C9.45708 9.98988 9.29604 10.2886 9.13804 10.5753C8.97396 10.874 8.80684 11.1787 8.58503 11.2512C8.37841 11.3175 8.06848 11.1727 7.77071 11.0309C7.46685 10.8891 7.15085 10.7412 6.82877 10.7412ZM10.4568 11.3507C10.3261 11.3175 10.1924 11.393 10.159 11.5227L9.72447 13.137L8.86457 11.6585C9.18969 11.4925 9.38112 11.1455 9.56647 10.8076C9.69712 10.5692 9.83386 10.3188 9.99186 10.2041C10.1559 10.0864 10.4355 10.0321 10.7089 9.98385C10.8062 9.96574 10.9034 9.94764 10.9976 9.92652L12.0793 11.7883L10.4568 11.3507Z" />
                            <path d="M9.10765 4.39858C9.01346 4.30505 8.85849 4.30505 8.7643 4.39858L6.3031 6.84267L4.89627 5.44562C4.80207 5.35208 4.64711 5.35208 4.55291 5.44562C4.45872 5.53916 4.45872 5.69305 4.55291 5.78659L6.13294 7.35563C6.17852 7.40089 6.23929 7.42503 6.30614 7.42503C6.37299 7.42503 6.43376 7.40089 6.47933 7.35563L9.10765 4.73955C9.20184 4.64601 9.20184 4.49212 9.10765 4.39858Z" />
                          </g>
                        </svg>
                        Best Deal!
                      </span>
                    </div>
                    <div className="category-content">
                      <h5><Link legacyBehavior href="/car-deatils"><a>Toyota</a></Link></h5>
                      <span>Available Car 23, 435</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="brand-category-card">
                    <div className="category-img">
                      <img src="assets/img/home3/mercedes.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h5><Link legacyBehavior href="/car-deatils"><a>Mercedes Benz-C</a></Link></h5>
                      <span>Available Car 23, 435</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="brand-category-card">
                    <div className="category-img">
                      <img src="assets/img/home3/suzuki.png" alt="" />
                    </div>
                    <div className="batch">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                          <mask id="mask0_878_52" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={14} height={14}>
                            <rect width={14} height={14} fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_878_52)">
                            <path d="M10.6178 5.87725C10.6178 3.80129 8.91625 2.11456 6.82879 2.11456C4.74133 2.11456 3.03976 3.80129 3.03976 5.87725C3.03976 7.9502 4.73829 9.63994 6.82879 9.63994C8.91929 9.63994 10.6178 7.9502 10.6178 5.87725ZM6.82879 9.15414C5.00872 9.15414 3.52593 7.68467 3.52593 5.87424C3.52593 4.0638 5.00872 2.59735 6.82879 2.59735C8.64886 2.59735 10.1317 4.06682 10.1317 5.87725C10.1317 7.68769 8.64886 9.15414 6.82879 9.15414Z" />
                            <path d="M11.4716 9.76961C11.6083 9.70021 11.7299 9.60969 11.8241 9.48296C12.0702 9.14803 12.0125 8.71051 11.9578 8.28506C11.9213 8.01047 11.8849 7.72382 11.9487 7.53071C12.0064 7.34966 12.2009 7.1475 12.3862 6.95439C12.6749 6.65265 13 6.31168 13 5.88019C13 5.44871 12.6779 5.10171 12.3892 4.79997C12.2039 4.60384 12.0094 4.40469 11.9517 4.22364C11.8879 4.03053 11.9244 3.74388 11.9608 3.4693C12.0155 3.04384 12.0702 2.60632 11.8271 2.27139C11.581 1.93344 11.1404 1.85197 10.715 1.7705C10.4416 1.71921 10.159 1.66791 9.99794 1.55023C9.83689 1.43557 9.7032 1.18815 9.57254 0.946754C9.37504 0.584667 9.14715 0.174301 8.74303 0.0415357C8.3541 -0.0851949 7.95605 0.101884 7.57016 0.282927C7.31189 0.403623 7.04754 0.527336 6.83484 0.527336C6.62215 0.527336 6.3578 0.403623 6.09952 0.282927C5.71363 0.101884 5.31558 -0.0851949 4.92665 0.0415357C4.51949 0.171284 4.3068 0.566562 4.09714 0.946754C3.96648 1.18513 3.82975 1.43557 3.67175 1.55023C3.50767 1.66791 3.22812 1.72222 2.95466 1.7705C2.52927 1.84895 2.08868 1.93344 1.84256 2.27139C1.59644 2.60632 1.65417 3.04384 1.70887 3.4693C1.74533 3.74388 1.78179 4.03053 1.71798 4.22364C1.66025 4.40469 1.46579 4.60685 1.28044 4.79997C0.991778 5.10171 0.666656 5.44267 0.666656 5.87416C0.666656 6.30565 0.994816 6.64661 1.28044 6.94835C1.46579 7.14448 1.66025 7.34363 1.71798 7.52467C1.78179 7.71779 1.74533 8.00444 1.70887 8.27902C1.65417 8.70447 1.59948 9.142 1.84256 9.47693C1.93676 9.60366 2.0583 9.6972 2.19503 9.76358L0.870237 12.0417C0.821621 12.1262 0.827698 12.2318 0.888468 12.3103C0.949238 12.3887 1.04951 12.4219 1.1437 12.3978L3.10051 11.8758L3.62617 13.819C3.65048 13.9125 3.73252 13.9819 3.82975 13.997C3.84191 13.997 3.85102 14 3.86014 14C3.94521 14 4.02725 13.9547 4.06979 13.8793L5.31255 11.74C5.5769 11.7098 5.84429 11.5861 6.10256 11.4654C6.36083 11.3447 6.62518 11.221 6.83788 11.221C7.05058 11.221 7.31493 11.3447 7.5732 11.4654C7.83148 11.5861 8.09886 11.7128 8.36322 11.74L9.60597 13.8793C9.64851 13.9547 9.73055 14 9.81563 14C9.82474 14 9.83689 14 9.84601 13.997C9.94324 13.9849 10.0222 13.9155 10.0496 13.819L10.5753 11.8758L12.5321 12.3978C12.6263 12.4219 12.7265 12.3887 12.7873 12.3103C12.8481 12.2318 12.8541 12.1262 12.8055 12.0417L11.4716 9.76961ZM3.93306 13.137L3.49855 11.5227C3.46513 11.393 3.33143 11.3175 3.20078 11.3507L1.57517 11.7822L2.65688 9.92048C2.75108 9.94161 2.84831 9.95971 2.94554 9.97781C3.21901 10.0291 3.50159 10.0804 3.66263 10.1981C3.82367 10.3127 3.95737 10.5602 4.08802 10.8016C4.26426 11.1244 4.46176 11.4835 4.78992 11.6525L3.93306 13.137ZM6.82877 10.7412C6.50668 10.7412 6.19068 10.8891 5.88683 11.0309C5.58601 11.1727 5.27608 11.3175 5.0725 11.2512C4.85069 11.1787 4.68357 10.871 4.51949 10.5753C4.36149 10.2886 4.20045 9.9929 3.95129 9.81186C3.69909 9.63081 3.36182 9.56745 3.0367 9.5071C2.7055 9.44374 2.36215 9.38037 2.22541 9.19933C2.09476 9.0213 2.1373 8.67732 2.17984 8.34842C2.22238 8.01953 2.26492 7.68158 2.16768 7.38286C2.07349 7.09922 1.84256 6.85481 1.62075 6.62247C1.38375 6.37505 1.13763 6.11857 1.13763 5.88019C1.13763 5.64182 1.38375 5.38534 1.62075 5.13791C1.8456 4.90256 2.07653 4.66117 2.16768 4.37753C2.26492 4.07881 2.22238 3.74086 2.17984 3.41196C2.1373 3.08005 2.09476 2.73909 2.22541 2.56106C2.35911 2.377 2.70246 2.31363 3.0367 2.25329C3.36182 2.19294 3.69909 2.12957 3.95129 1.94853C4.20045 1.7705 4.36149 1.47178 4.51949 1.18513C4.68357 0.886406 4.85069 0.581649 5.0725 0.509232C5.27912 0.442849 5.58905 0.587684 5.88683 0.729501C6.19068 0.871319 6.50668 1.01917 6.82877 1.01917C7.15085 1.01917 7.46685 0.871319 7.77071 0.729501C8.07152 0.587684 8.38145 0.442849 8.58503 0.509232C8.80684 0.581649 8.97396 0.889423 9.13804 1.18513C9.29604 1.47178 9.45708 1.76749 9.70624 1.94853C9.95844 2.12957 10.2957 2.19294 10.6208 2.25329C10.952 2.31665 11.2954 2.38002 11.4321 2.56106C11.5628 2.73909 11.5202 3.08307 11.4777 3.41196C11.4352 3.74086 11.3926 4.07881 11.4898 4.37753C11.584 4.66117 11.815 4.90557 12.0368 5.13791C12.2738 5.38534 12.5199 5.64182 12.5199 5.88019C12.5199 6.11857 12.2738 6.37505 12.0368 6.62247C11.8119 6.85783 11.581 7.09922 11.4898 7.38286C11.3926 7.68158 11.4352 8.01953 11.4777 8.34842C11.5202 8.68034 11.5628 9.0213 11.4321 9.19933C11.2984 9.38339 10.9551 9.44675 10.6208 9.5071C10.2957 9.56745 9.95844 9.63081 9.70624 9.81186C9.45708 9.98988 9.29604 10.2886 9.13804 10.5753C8.97396 10.874 8.80684 11.1787 8.58503 11.2512C8.37841 11.3175 8.06848 11.1727 7.77071 11.0309C7.46685 10.8891 7.15085 10.7412 6.82877 10.7412ZM10.4568 11.3507C10.3261 11.3175 10.1924 11.393 10.159 11.5227L9.72447 13.137L8.86457 11.6585C9.18969 11.4925 9.38112 11.1455 9.56647 10.8076C9.69712 10.5692 9.83386 10.3188 9.99186 10.2041C10.1559 10.0864 10.4355 10.0321 10.7089 9.98385C10.8062 9.96574 10.9034 9.94764 10.9976 9.92652L12.0793 11.7883L10.4568 11.3507Z" />
                            <path d="M9.10765 4.39858C9.01346 4.30505 8.85849 4.30505 8.7643 4.39858L6.3031 6.84267L4.89627 5.44562C4.80207 5.35208 4.64711 5.35208 4.55291 5.44562C4.45872 5.53916 4.45872 5.69305 4.55291 5.78659L6.13294 7.35563C6.17852 7.40089 6.23929 7.42503 6.30614 7.42503C6.37299 7.42503 6.43376 7.40089 6.47933 7.35563L9.10765 4.73955C9.20184 4.64601 9.20184 4.49212 9.10765 4.39858Z" />
                          </g>
                        </svg>
                        Best Deal!
                      </span>
                    </div>
                    <div className="category-content">
                      <h5><Link legacyBehavior href="/car-deatils"><a>Suzuki</a></Link></h5>
                      <span>Available Car 23, 435  </span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="brand-category-card">
                    <div className="category-img">
                      <img src="assets/img/home3/tesla.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h5><Link legacyBehavior href="/car-deatils"><a>Tesla</a></Link></h5>
                      <span>Available Car 23, 435</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="brand-category-card">
                    <div className="category-img">
                      <img src="assets/img/home3/toyota.png" alt="" />
                    </div>
                    <div className="batch">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                          <mask id="mask0_878_5200" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={14} height={14}>
                            <rect width={14} height={14} fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_878_5200)">
                            <path d="M10.6178 5.87725C10.6178 3.80129 8.91625 2.11456 6.82879 2.11456C4.74133 2.11456 3.03976 3.80129 3.03976 5.87725C3.03976 7.9502 4.73829 9.63994 6.82879 9.63994C8.91929 9.63994 10.6178 7.9502 10.6178 5.87725ZM6.82879 9.15414C5.00872 9.15414 3.52593 7.68467 3.52593 5.87424C3.52593 4.0638 5.00872 2.59735 6.82879 2.59735C8.64886 2.59735 10.1317 4.06682 10.1317 5.87725C10.1317 7.68769 8.64886 9.15414 6.82879 9.15414Z" />
                            <path d="M11.4716 9.76961C11.6083 9.70021 11.7299 9.60969 11.8241 9.48296C12.0702 9.14803 12.0125 8.71051 11.9578 8.28506C11.9213 8.01047 11.8849 7.72382 11.9487 7.53071C12.0064 7.34966 12.2009 7.1475 12.3862 6.95439C12.6749 6.65265 13 6.31168 13 5.88019C13 5.44871 12.6779 5.10171 12.3892 4.79997C12.2039 4.60384 12.0094 4.40469 11.9517 4.22364C11.8879 4.03053 11.9244 3.74388 11.9608 3.4693C12.0155 3.04384 12.0702 2.60632 11.8271 2.27139C11.581 1.93344 11.1404 1.85197 10.715 1.7705C10.4416 1.71921 10.159 1.66791 9.99794 1.55023C9.83689 1.43557 9.7032 1.18815 9.57254 0.946754C9.37504 0.584667 9.14715 0.174301 8.74303 0.0415357C8.3541 -0.0851949 7.95605 0.101884 7.57016 0.282927C7.31189 0.403623 7.04754 0.527336 6.83484 0.527336C6.62215 0.527336 6.3578 0.403623 6.09952 0.282927C5.71363 0.101884 5.31558 -0.0851949 4.92665 0.0415357C4.51949 0.171284 4.3068 0.566562 4.09714 0.946754C3.96648 1.18513 3.82975 1.43557 3.67175 1.55023C3.50767 1.66791 3.22812 1.72222 2.95466 1.7705C2.52927 1.84895 2.08868 1.93344 1.84256 2.27139C1.59644 2.60632 1.65417 3.04384 1.70887 3.4693C1.74533 3.74388 1.78179 4.03053 1.71798 4.22364C1.66025 4.40469 1.46579 4.60685 1.28044 4.79997C0.991778 5.10171 0.666656 5.44267 0.666656 5.87416C0.666656 6.30565 0.994816 6.64661 1.28044 6.94835C1.46579 7.14448 1.66025 7.34363 1.71798 7.52467C1.78179 7.71779 1.74533 8.00444 1.70887 8.27902C1.65417 8.70447 1.59948 9.142 1.84256 9.47693C1.93676 9.60366 2.0583 9.6972 2.19503 9.76358L0.870237 12.0417C0.821621 12.1262 0.827698 12.2318 0.888468 12.3103C0.949238 12.3887 1.04951 12.4219 1.1437 12.3978L3.10051 11.8758L3.62617 13.819C3.65048 13.9125 3.73252 13.9819 3.82975 13.997C3.84191 13.997 3.85102 14 3.86014 14C3.94521 14 4.02725 13.9547 4.06979 13.8793L5.31255 11.74C5.5769 11.7098 5.84429 11.5861 6.10256 11.4654C6.36083 11.3447 6.62518 11.221 6.83788 11.221C7.05058 11.221 7.31493 11.3447 7.5732 11.4654C7.83148 11.5861 8.09886 11.7128 8.36322 11.74L9.60597 13.8793C9.64851 13.9547 9.73055 14 9.81563 14C9.82474 14 9.83689 14 9.84601 13.997C9.94324 13.9849 10.0222 13.9155 10.0496 13.819L10.5753 11.8758L12.5321 12.3978C12.6263 12.4219 12.7265 12.3887 12.7873 12.3103C12.8481 12.2318 12.8541 12.1262 12.8055 12.0417L11.4716 9.76961ZM3.93306 13.137L3.49855 11.5227C3.46513 11.393 3.33143 11.3175 3.20078 11.3507L1.57517 11.7822L2.65688 9.92048C2.75108 9.94161 2.84831 9.95971 2.94554 9.97781C3.21901 10.0291 3.50159 10.0804 3.66263 10.1981C3.82367 10.3127 3.95737 10.5602 4.08802 10.8016C4.26426 11.1244 4.46176 11.4835 4.78992 11.6525L3.93306 13.137ZM6.82877 10.7412C6.50668 10.7412 6.19068 10.8891 5.88683 11.0309C5.58601 11.1727 5.27608 11.3175 5.0725 11.2512C4.85069 11.1787 4.68357 10.871 4.51949 10.5753C4.36149 10.2886 4.20045 9.9929 3.95129 9.81186C3.69909 9.63081 3.36182 9.56745 3.0367 9.5071C2.7055 9.44374 2.36215 9.38037 2.22541 9.19933C2.09476 9.0213 2.1373 8.67732 2.17984 8.34842C2.22238 8.01953 2.26492 7.68158 2.16768 7.38286C2.07349 7.09922 1.84256 6.85481 1.62075 6.62247C1.38375 6.37505 1.13763 6.11857 1.13763 5.88019C1.13763 5.64182 1.38375 5.38534 1.62075 5.13791C1.8456 4.90256 2.07653 4.66117 2.16768 4.37753C2.26492 4.07881 2.22238 3.74086 2.17984 3.41196C2.1373 3.08005 2.09476 2.73909 2.22541 2.56106C2.35911 2.377 2.70246 2.31363 3.0367 2.25329C3.36182 2.19294 3.69909 2.12957 3.95129 1.94853C4.20045 1.7705 4.36149 1.47178 4.51949 1.18513C4.68357 0.886406 4.85069 0.581649 5.0725 0.509232C5.27912 0.442849 5.58905 0.587684 5.88683 0.729501C6.19068 0.871319 6.50668 1.01917 6.82877 1.01917C7.15085 1.01917 7.46685 0.871319 7.77071 0.729501C8.07152 0.587684 8.38145 0.442849 8.58503 0.509232C8.80684 0.581649 8.97396 0.889423 9.13804 1.18513C9.29604 1.47178 9.45708 1.76749 9.70624 1.94853C9.95844 2.12957 10.2957 2.19294 10.6208 2.25329C10.952 2.31665 11.2954 2.38002 11.4321 2.56106C11.5628 2.73909 11.5202 3.08307 11.4777 3.41196C11.4352 3.74086 11.3926 4.07881 11.4898 4.37753C11.584 4.66117 11.815 4.90557 12.0368 5.13791C12.2738 5.38534 12.5199 5.64182 12.5199 5.88019C12.5199 6.11857 12.2738 6.37505 12.0368 6.62247C11.8119 6.85783 11.581 7.09922 11.4898 7.38286C11.3926 7.68158 11.4352 8.01953 11.4777 8.34842C11.5202 8.68034 11.5628 9.0213 11.4321 9.19933C11.2984 9.38339 10.9551 9.44675 10.6208 9.5071C10.2957 9.56745 9.95844 9.63081 9.70624 9.81186C9.45708 9.98988 9.29604 10.2886 9.13804 10.5753C8.97396 10.874 8.80684 11.1787 8.58503 11.2512C8.37841 11.3175 8.06848 11.1727 7.77071 11.0309C7.46685 10.8891 7.15085 10.7412 6.82877 10.7412ZM10.4568 11.3507C10.3261 11.3175 10.1924 11.393 10.159 11.5227L9.72447 13.137L8.86457 11.6585C9.18969 11.4925 9.38112 11.1455 9.56647 10.8076C9.69712 10.5692 9.83386 10.3188 9.99186 10.2041C10.1559 10.0864 10.4355 10.0321 10.7089 9.98385C10.8062 9.96574 10.9034 9.94764 10.9976 9.92652L12.0793 11.7883L10.4568 11.3507Z" />
                            <path d="M9.10765 4.39858C9.01346 4.30505 8.85849 4.30505 8.7643 4.39858L6.3031 6.84267L4.89627 5.44562C4.80207 5.35208 4.64711 5.35208 4.55291 5.44562C4.45872 5.53916 4.45872 5.69305 4.55291 5.78659L6.13294 7.35563C6.17852 7.40089 6.23929 7.42503 6.30614 7.42503C6.37299 7.42503 6.43376 7.40089 6.47933 7.35563L9.10765 4.73955C9.20184 4.64601 9.20184 4.49212 9.10765 4.39858Z" />
                          </g>
                        </svg>
                        Best Deal!
                      </span>
                    </div>
                    <div className="category-content">
                      <h5><Link legacyBehavior href="/car-deatils"><a>Toyota</a></Link></h5>
                      <span>Available Car 23, 435</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="brand-category-card">
                    <div className="category-img">
                      <img src="assets/img/home3/mercedes.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h5><Link legacyBehavior href="/car-deatils"><a>Mercedes Benz-C</a></Link></h5>
                      <span>Available Car 23, 435</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="brand-category-card">
                    <div className="category-img">
                      <img src="assets/img/home3/suzuki.png" alt="" />
                    </div>
                    <div className="batch">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                          <mask id="mask0_878_52" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={14} height={14}>
                            <rect width={14} height={14} fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_878_52)">
                            <path d="M10.6178 5.87725C10.6178 3.80129 8.91625 2.11456 6.82879 2.11456C4.74133 2.11456 3.03976 3.80129 3.03976 5.87725C3.03976 7.9502 4.73829 9.63994 6.82879 9.63994C8.91929 9.63994 10.6178 7.9502 10.6178 5.87725ZM6.82879 9.15414C5.00872 9.15414 3.52593 7.68467 3.52593 5.87424C3.52593 4.0638 5.00872 2.59735 6.82879 2.59735C8.64886 2.59735 10.1317 4.06682 10.1317 5.87725C10.1317 7.68769 8.64886 9.15414 6.82879 9.15414Z" />
                            <path d="M11.4716 9.76961C11.6083 9.70021 11.7299 9.60969 11.8241 9.48296C12.0702 9.14803 12.0125 8.71051 11.9578 8.28506C11.9213 8.01047 11.8849 7.72382 11.9487 7.53071C12.0064 7.34966 12.2009 7.1475 12.3862 6.95439C12.6749 6.65265 13 6.31168 13 5.88019C13 5.44871 12.6779 5.10171 12.3892 4.79997C12.2039 4.60384 12.0094 4.40469 11.9517 4.22364C11.8879 4.03053 11.9244 3.74388 11.9608 3.4693C12.0155 3.04384 12.0702 2.60632 11.8271 2.27139C11.581 1.93344 11.1404 1.85197 10.715 1.7705C10.4416 1.71921 10.159 1.66791 9.99794 1.55023C9.83689 1.43557 9.7032 1.18815 9.57254 0.946754C9.37504 0.584667 9.14715 0.174301 8.74303 0.0415357C8.3541 -0.0851949 7.95605 0.101884 7.57016 0.282927C7.31189 0.403623 7.04754 0.527336 6.83484 0.527336C6.62215 0.527336 6.3578 0.403623 6.09952 0.282927C5.71363 0.101884 5.31558 -0.0851949 4.92665 0.0415357C4.51949 0.171284 4.3068 0.566562 4.09714 0.946754C3.96648 1.18513 3.82975 1.43557 3.67175 1.55023C3.50767 1.66791 3.22812 1.72222 2.95466 1.7705C2.52927 1.84895 2.08868 1.93344 1.84256 2.27139C1.59644 2.60632 1.65417 3.04384 1.70887 3.4693C1.74533 3.74388 1.78179 4.03053 1.71798 4.22364C1.66025 4.40469 1.46579 4.60685 1.28044 4.79997C0.991778 5.10171 0.666656 5.44267 0.666656 5.87416C0.666656 6.30565 0.994816 6.64661 1.28044 6.94835C1.46579 7.14448 1.66025 7.34363 1.71798 7.52467C1.78179 7.71779 1.74533 8.00444 1.70887 8.27902C1.65417 8.70447 1.59948 9.142 1.84256 9.47693C1.93676 9.60366 2.0583 9.6972 2.19503 9.76358L0.870237 12.0417C0.821621 12.1262 0.827698 12.2318 0.888468 12.3103C0.949238 12.3887 1.04951 12.4219 1.1437 12.3978L3.10051 11.8758L3.62617 13.819C3.65048 13.9125 3.73252 13.9819 3.82975 13.997C3.84191 13.997 3.85102 14 3.86014 14C3.94521 14 4.02725 13.9547 4.06979 13.8793L5.31255 11.74C5.5769 11.7098 5.84429 11.5861 6.10256 11.4654C6.36083 11.3447 6.62518 11.221 6.83788 11.221C7.05058 11.221 7.31493 11.3447 7.5732 11.4654C7.83148 11.5861 8.09886 11.7128 8.36322 11.74L9.60597 13.8793C9.64851 13.9547 9.73055 14 9.81563 14C9.82474 14 9.83689 14 9.84601 13.997C9.94324 13.9849 10.0222 13.9155 10.0496 13.819L10.5753 11.8758L12.5321 12.3978C12.6263 12.4219 12.7265 12.3887 12.7873 12.3103C12.8481 12.2318 12.8541 12.1262 12.8055 12.0417L11.4716 9.76961ZM3.93306 13.137L3.49855 11.5227C3.46513 11.393 3.33143 11.3175 3.20078 11.3507L1.57517 11.7822L2.65688 9.92048C2.75108 9.94161 2.84831 9.95971 2.94554 9.97781C3.21901 10.0291 3.50159 10.0804 3.66263 10.1981C3.82367 10.3127 3.95737 10.5602 4.08802 10.8016C4.26426 11.1244 4.46176 11.4835 4.78992 11.6525L3.93306 13.137ZM6.82877 10.7412C6.50668 10.7412 6.19068 10.8891 5.88683 11.0309C5.58601 11.1727 5.27608 11.3175 5.0725 11.2512C4.85069 11.1787 4.68357 10.871 4.51949 10.5753C4.36149 10.2886 4.20045 9.9929 3.95129 9.81186C3.69909 9.63081 3.36182 9.56745 3.0367 9.5071C2.7055 9.44374 2.36215 9.38037 2.22541 9.19933C2.09476 9.0213 2.1373 8.67732 2.17984 8.34842C2.22238 8.01953 2.26492 7.68158 2.16768 7.38286C2.07349 7.09922 1.84256 6.85481 1.62075 6.62247C1.38375 6.37505 1.13763 6.11857 1.13763 5.88019C1.13763 5.64182 1.38375 5.38534 1.62075 5.13791C1.8456 4.90256 2.07653 4.66117 2.16768 4.37753C2.26492 4.07881 2.22238 3.74086 2.17984 3.41196C2.1373 3.08005 2.09476 2.73909 2.22541 2.56106C2.35911 2.377 2.70246 2.31363 3.0367 2.25329C3.36182 2.19294 3.69909 2.12957 3.95129 1.94853C4.20045 1.7705 4.36149 1.47178 4.51949 1.18513C4.68357 0.886406 4.85069 0.581649 5.0725 0.509232C5.27912 0.442849 5.58905 0.587684 5.88683 0.729501C6.19068 0.871319 6.50668 1.01917 6.82877 1.01917C7.15085 1.01917 7.46685 0.871319 7.77071 0.729501C8.07152 0.587684 8.38145 0.442849 8.58503 0.509232C8.80684 0.581649 8.97396 0.889423 9.13804 1.18513C9.29604 1.47178 9.45708 1.76749 9.70624 1.94853C9.95844 2.12957 10.2957 2.19294 10.6208 2.25329C10.952 2.31665 11.2954 2.38002 11.4321 2.56106C11.5628 2.73909 11.5202 3.08307 11.4777 3.41196C11.4352 3.74086 11.3926 4.07881 11.4898 4.37753C11.584 4.66117 11.815 4.90557 12.0368 5.13791C12.2738 5.38534 12.5199 5.64182 12.5199 5.88019C12.5199 6.11857 12.2738 6.37505 12.0368 6.62247C11.8119 6.85783 11.581 7.09922 11.4898 7.38286C11.3926 7.68158 11.4352 8.01953 11.4777 8.34842C11.5202 8.68034 11.5628 9.0213 11.4321 9.19933C11.2984 9.38339 10.9551 9.44675 10.6208 9.5071C10.2957 9.56745 9.95844 9.63081 9.70624 9.81186C9.45708 9.98988 9.29604 10.2886 9.13804 10.5753C8.97396 10.874 8.80684 11.1787 8.58503 11.2512C8.37841 11.3175 8.06848 11.1727 7.77071 11.0309C7.46685 10.8891 7.15085 10.7412 6.82877 10.7412ZM10.4568 11.3507C10.3261 11.3175 10.1924 11.393 10.159 11.5227L9.72447 13.137L8.86457 11.6585C9.18969 11.4925 9.38112 11.1455 9.56647 10.8076C9.69712 10.5692 9.83386 10.3188 9.99186 10.2041C10.1559 10.0864 10.4355 10.0321 10.7089 9.98385C10.8062 9.96574 10.9034 9.94764 10.9976 9.92652L12.0793 11.7883L10.4568 11.3507Z" />
                            <path d="M9.10765 4.39858C9.01346 4.30505 8.85849 4.30505 8.7643 4.39858L6.3031 6.84267L4.89627 5.44562C4.80207 5.35208 4.64711 5.35208 4.55291 5.44562C4.45872 5.53916 4.45872 5.69305 4.55291 5.78659L6.13294 7.35563C6.17852 7.40089 6.23929 7.42503 6.30614 7.42503C6.37299 7.42503 6.43376 7.40089 6.47933 7.35563L9.10765 4.73955C9.20184 4.64601 9.20184 4.49212 9.10765 4.39858Z" />
                          </g>
                        </svg>
                        Best Deal!
                      </span>
                    </div>
                    <div className="category-content">
                      <h5><Link legacyBehavior href="/car-deatils"><a>Suzuki</a></Link></h5>
                      <span>Available Car 23, 435  </span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="brand-category-card">
                    <div className="category-img">
                      <img src="assets/img/home3/tesla.png" alt="" />
                    </div>
                    <div className="category-content">
                      <h5><Link legacyBehavior href="/car-deatils"><a>Tesla</a></Link></h5>
                      <span>Available Car 23, 435</span>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>

  )
}

export default index
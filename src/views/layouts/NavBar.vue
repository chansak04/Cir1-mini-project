<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark shadow" style="background: #7f00ff;">
        <div class="container">
            <RouterLink :to="{ name:'home'}" class="navbar-brand">นายมาร์ก</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'home' }" class="nav-link active" aria-current="page"><i class="bi bi-house-fill m-1"></i>หน้าแรก</RouterLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="bi bi-diagram-3-fill m-1"></i>บุคคลากร</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                           <i class="bi bi-journal-album m-1"></i>หลักสูตร
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">ระดับประกาศนียบัตรวิชาชีพ(ปวช.)</a></li>
                            <li><a class="dropdown-item" href="#">ระดับประกาศนียบัตรวิชาชีพชั้นสูง(ปวส.)</a></li>
                            <li><a class="dropdown-item" href="#">ระดับปริญญาตรี(ป.ตรี)</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">หลักสูตรอื่นๆ</a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="bi bi-bank2 m-1"></i> เกี่ยวกับเรา
                        </a>
                        <ul class="dropdown-menu">
                            <li><RouterLink :to="{name:'about'}" class="dropdown-item">ประวัติความเป็นมา</RouterLink></li>
                            <li><a class="dropdown-item" href="#">วิสัยทัศน์</a></li>
                            <li><a class="dropdown-item" href="#">บุคลากร</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">แผนที่</a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="bi bi-person-workspace m-1"></i>เผยแพร่ผลงาน
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">ผลงานนักเรียน-นักศึกษา</a></li>
                            <li><a class="dropdown-item" href="#">ผลงานครู-อาจารย์</a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="bi bi-hdd-stack-fill m-1"></i>ระบบบริการ
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">ระบบฐานข้อมูล นักเรียน-นักศึกษา</a></li>
                            <li><a class="dropdown-item" href="#">ระบบสมัคร นักเรียน-นักศึกษาออนไลน์</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-disabled="true" href="#"><i class="bi bi-globe-americas m-1"></i>เว็บอื่นๆ</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');

.navbar {
    font-family: 'Sarabun', sans-serif;
}
</style>
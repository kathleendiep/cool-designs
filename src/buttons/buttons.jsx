<div className="banner-btn">
                             
<a className="default-btn">
    Learn More
</a>
{/* <Link href="/contact"> */}
<a className="default-btn">
    Contact Us
</a>
{/* </Link> */}
</div>
</div>
</div>



// modern button

<>
    <a className="default-btn card-container">
        HTML
    </a>
</>
// style 
<style>
.card-container {
    margin: auto;
}
.default-btn {
    font-size: 15px;
    font-weight: 600;
    width: 50vw;
    display: inline-block;
    text-align: center;
    color: white;
    padding: 20px 30px;
    line-height: 1;
    transition: $transition;
    z-index: 1;
    text-transform: capitalize;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    &::before {
        content: "";
        position: absolute;
        top: -20px;
        left: -40px;
        width: 10px;
        height: 100px;
        background-color: #ffffff;
        opacity: 0.5;
        transition: $transition;
        transform: rotate(45deg);
    }
    &::after {
        content: "";
        position: absolute;
        top: -20px;
        right: -40px;
        width: 10px;
        height: 100px;
        background-color: #ffffff;
        opacity: 0.5;
        transition: $transition;
        transform: rotate(45deg);
    }
    &.active {
        background-color: $white-color;
        color: $main-color;
        &:hover {
            color: $white-color;
            background-color: $main-color;
        }
    }
    &:hover {
        color: $white-color;
        transition: $transition;
        &::before {
            left: 200px;
        }
        &::after {
            right: 200px;
        }
    }
}

.default-btn>a {
    text-decoration: none;
    color: white;
    display: inline-block;
}

@media only screen and (max-width: 767px) {
    .default-btn{
        width: 40vw;
    }
}
@media only screen and (min-width: 767px) {
    .default-btn{
        width: 25vw;
    }
}

</style>
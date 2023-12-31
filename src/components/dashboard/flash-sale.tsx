"use client";
import Image from "next/image";
import { Fragment, useState } from "react";
import CardProduct from "./card-product";

function FlashSale() {
    const [opacity, setopacity] = useState<number>(1);

    return (
        <Fragment>
            <div className="my-4">
                <div className="w-[5.5rem] pb-1 bg- z-50 rounded-t-xl  text-center text-xs flex items-center justify-center bg-red-500/95 backdrop-blur supports-[backdrop-filter]:bg-red-500/60 text-white pt-1 font-bold">
                    5 : 34 : 2
                </div>
                <div
                    style={{
                        padding: ".5rem 0",
                        display: "flex",
                        flexDirection: "row",
                        backgroundImage:
                            "linear-gradient(180deg, #f44336, #fff)",
                        borderRadius: 5,
                    }}
                    className="mt-[-.2rem]"
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            background: "#f44336",
                            borderRadius: 5,
                        }}
                        className="w-[18rem] pb-4 pt-2 pl-4"
                    >
                        <Image
                            className="mt-2"
                            style={{ opacity }}
                            src="/flash-sale.png"
                            alt=""
                            width={100}
                            height={70}
                        />
                    </div>
                    <div
                        className="no-scrollbar z-10 mb-2"
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            marginLeft: "-9.3rem",
                            paddingLeft: "8.5rem",
                            overflowX: "auto",
                            scrollbarWidth: "none",
                        }}
                        onScroll={(e) =>
                            setopacity(
                                1 -
                                    (e.currentTarget.scrollLeft /
                                        (e.currentTarget.scrollWidth -
                                            e.currentTarget.clientWidth)) *
                                        2.5
                            )
                        }
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, idx) => (
                            <CardProduct
                                key={idx.toString()}
                                avatar="https://assets-prd.ignimgs.com/2022/07/19/fifa-23-button-02-1658265594101.jpg"
                                title="FIFA 23"
                                link="fea"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default FlashSale;

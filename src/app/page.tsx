import Carousel from "@/components/dashboard/carousel";
import FlashSale from "@/components/dashboard/flash-sale";
import ListGame from "@/components/dashboard/list-game";

export default function Home() {
    return (
        <div className="mb-14">
            <Carousel />
            <FlashSale />
            <ListGame />
        </div>
    );
}

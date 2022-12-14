import {MdChevronRight} from "react-icons/md"
import {Swiper, SwiperSlide} from "swiper/react"
import { Container, ListContainer, TitleContainer, Cover } from "./styles"

type IContentListProps = {
    data: {
        id: string;
        name: string;
        path: string;
        list: CotentList[];
    }
}

type CotentList = {
    id: string
    title: string;
    cover: string;
    normailize: string;
}

const ContentList = ({data}: IContentListProps) => {
    return <Container>
        <TitleContainer>
            <span>{data.name}</span>
            <MdChevronRight size={24} />
        </TitleContainer>

        <ListContainer>
            <Swiper loop spaceBetween={16} slidesPerView={"auto"}>
            {data.list.map(item => <SwiperSlide> <Cover src={item.cover} alt="" /> </SwiperSlide>)}
            </Swiper>
        </ListContainer>

        </Container>
}

export {ContentList}
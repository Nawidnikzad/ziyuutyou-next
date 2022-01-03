import UploadFileOutlined from "@mui/icons-material/UploadFileOutlined"
import { useTheme } from "@mui/material"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Link from "next/link"
import React from "react"
import BlogItem from "../src/data/BlogItem"
import Spacer from "./Spacer"
import TagChipGroup from "./TagChipGroup"

/** BlogItem へ渡すデータ */
type BlogItemProps = {
    /** 記事のデータ */
    blogItem: BlogItem
}

/** 記事一覧の各レイアウト */
const BlogListItem: React.FC<BlogItemProps> = (props) => {
    const theme = useTheme()
    return (
        <Box sx={{ padding: 3 }}>
            <Link passHref href={props.blogItem.link}>
                <a style={{ color: theme.palette.primary.main, fontSize: 25 }} >
                    {props.blogItem.title}
                </a>
            </Link>
            <Typography variant="body2" color="text.secondary">
                {props.blogItem.description}
            </Typography>
            <Spacer value={2} />
            <TagChipGroup tagList={props.blogItem.tags} />
            <Spacer value={2} />
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
            }}>
                <UploadFileOutlined />
                <Typography color="text.secondary">
                    {`${props.blogItem.createdAt} 投稿`}
                </Typography>
            </div>
        </Box>
    )
}

export default BlogListItem
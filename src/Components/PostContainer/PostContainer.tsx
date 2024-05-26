import { Card, CardContent, Typography } from "@mui/material";

type Props = {
  post: PostWithUser;
};

export default function PostContainer({ post }: Props) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography color="textSecondary" variant="body1">
          Posted by: {post.user.name}
        </Typography>
        <Typography variant="body2" component="b">
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  );
}

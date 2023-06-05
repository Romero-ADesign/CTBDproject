puts "Seeding users..."
User.create!([
    {
        username: "Adam",
        password: "test123",
        profile_picture: "https://cdn.discordapp.com/attachments/719092262599917630/1090728471900201071/IMG_1807.png",
        email: "aromero0904@gmail.com"
    },
    {
        username: "Carlos",
        password: "Num#1CHOPPERLUV3R13",
        profile_picture: "https://cdn.discordapp.com/attachments/718296259932323860/1087850825847677058/cf7a4e4d04c21608655ebc764aa0c8d30ca1184br1-332-465v2_uhq.png",
        email: "cjandmelo@gmail.com"
    },
    {
        username: "Logan",
        password: "ILuvSmok3r23",
        profile_picture: "https://i.ytimg.com/vi/6vOH0SLjxXM/maxresdefault.jpg",
        email: "Loganelibermudez@gmail.com"
    }
])
puts "Users finished."


puts "Seeding posts..."
Post.create!([
    {
        post_name: "Recent project",
        post_description: "Took me around 2 weeks. List of materials: https://www.knitpro.eu/blog/crochet-essentials-to-have-in-your-collection/en",
        image: "https://i.etsystatic.com/5282912/r/il/f3c10d/2107126525/il_570xN.2107126525_zcp4.jpg",
        difficulty: "4"
    },
    {
        post_name: "Strawhat Luffy",
        post_description: "Luffy from One Piece",
        image: "https://i0.wp.com/crochethea.com/wp-content/uploads/2022/01/luffy_04_sq.jpeg?fit=1000%2C1000&ssl=1",
        difficulty: "4"
    },
    {
        post_name: "Little Miss Turtle Free Pattern",
        post_description: "Free pattern for you to use! Link: https://pinkmouseboutique.com/2019/04/13/little-miss-turtle-free-crochet-pattern/",
        image: "https://pinkmouseboutique.files.wordpress.com/2019/04/img_4060-1.jpg",
        difficulty: "2"
    },
    {
        post_name: "Blue Bird Chick Amigurumi Doll",
        post_description: "Cheap version of this blue bird I saw online. Enjoy!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN2Cmt07xA597w-EsG065Kjfd8zVodXOUqEA&usqp=CAU",
        difficulty: "5"
    },
    {
        post_name: "Free Honey Bee Pattern",
        post_description: "Free honey bee pattern. https://www.lovecrafts.com/en-us/p/honey-bee-crochet-pattern-by-studio-milanina",
        image: "https://isv.prod.lovecrafts.co/v1/images/66c8dfb32aa478b7663e2e97e071563d/bb2767eb-526b-4598-9a20-ba72fe234159.jpg/0/*/412x412",
        difficulty: "3"
    },
    {
        post_name: "Little Puppy Amigurumi Pattern",
        post_description: "Puppy Pattern for sale: https://www.etsy.com/listing/1404013727/little-puppy-amigurumi-pattern-quick",
        image: "https://i.etsystatic.com/27135599/r/il/d17a10/4614665313/il_fullxfull.4614665313_er9s.jpg",
        difficulty: "3"
    },
    {
        post_name: "10 Cute Monsters",
        post_description: "Monsters I made over the weekend!",
        image: "https://images.saymedia-content.com/.image/t_share/MTc0MTc0OTI2Nzg4MzcyMzQ4/free-easy-amigurumi-patterns-for-beginners.jpg",
        difficulty: "2"
    },
    {
        post_name: "Zoro",
        post_description: "Zoro toy I made",
        image: "https://i.etsystatic.com/22234104/r/il/4e03aa/3590244354/il_fullxfull.3590244354_sj4e.jpg",
        difficulty: "4"
    }
])
puts "Posts finished."

puts "Seeding user posts..."
UserPost.create!([
    {
        user_id: 1, post_id:3
    },
    {
        user_id:3, post_id:5
    },
    {
        user_id:2, post_id:2
    },
    {
        user_id:1, post_id:1
    },
    {
        user_id:2, post_id:4
    }
])
puts "UserPosts finished."

puts "Seeding tags..."
Tag.create!([
    {
        name: "Tutorial"
    },
    {
        name: "Showcase"
    },
    {
        name: "Idea"
    }
])

puts "Tags finished."

puts "Seeding PostTags..."
PostTag.create!([
    {
        post_id: 1, tag_id:2
    },
    {
        post_id: 2, tag_id:2
    },
    {
        post_id: 3, tag_id:1
    },
    {
        post_id: 4, tag_id:2
    },
    {
        post_id: 5, tag_id:1
    },
    {
        post_id: 6, tag_id:1
    },
    {
        post_id: 7, tag_id:2
    },
    {
        post_id: 8, tag_id:2
    }
])

puts "Finished seeding!"
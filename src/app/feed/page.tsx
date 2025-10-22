"use client"

import { useState } from "react"
import Link from "next/link"
import { Button, Card, CardHeader, CardBody, CardFooter, Avatar, Chip, Divider } from "@heroui/react"
import { Heart, MessageCircle, Share2, MapPin, Calendar, Plus } from "lucide-react"

// Fake data
const fakePosts = [
  {
    id: 1,
    author: "Maria Silva",
    authorAvatar: "/diverse-woman-portrait.png",
    date: "2025-01-20",
    petName: "Rex",
    species: "Cachorro",
    size: "Médio",
    color: "Marrom",
    images: ["/brown-dog.jpg"],
    location: "Bairro Monte Castelo, Campo Grande - MS",
    disappearanceDate: "2025-01-18",
    description:
      "Rex desapareceu na tarde de sexta-feira. Ele é muito dócil e responde pelo nome. Estava usando coleira azul.",
    contact: "(67) 99999-1111",
    likes: 24,
    comments: 8,
  },
  {
    id: 2,
    author: "João Santos",
    authorAvatar: "/man.jpg",
    date: "2025-01-19",
    petName: "Mimi",
    species: "Gato",
    size: "Pequeno",
    color: "Branco e Preto",
    images: ["/white-black-cat.jpg", "/cat-close-up.jpg"],
    location: "Centro, Campo Grande - MS",
    disappearanceDate: "2025-01-17",
    description: "Mimi fugiu pela janela. É muito assustada com estranhos. Tem uma mancha preta no focinho.",
    contact: "(67) 98888-2222",
    likes: 42,
    comments: 15,
  },
  {
    id: 3,
    author: "Ana Paula",
    authorAvatar: "/woman-2.jpg",
    date: "2025-01-21",
    petName: "Thor",
    species: "Cachorro",
    size: "Grande",
    color: "Preto",
    images: ["/black-big-dog.jpg", "/dog-playing.jpg", "/dog-portrait.jpg"],
    location: "Jardim dos Estados, Campo Grande - MS",
    disappearanceDate: "2025-01-20",
    description: "Thor saiu correndo durante o passeio. É muito amigável e adora crianças. Tem chip de identificação.",
    contact: "(67) 97777-3333",
    likes: 67,
    comments: 23,
  },
]

export default function FeedPage() {
  const [posts] = useState(fakePosts)

  const handleShare = (postId: number) => {
    console.log("[v0] Sharing post:", postId)
    // TODO: Implement share functionality
  }

  return (
    <div className="min-h-screen bg-default-50">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Feed de Pets</h1>
          <Button
            as={Link}
            href="/nova-publicacao"
            color="primary"
            startContent={<Plus className="h-5 w-5" />}
            className="font-semibold"
          >
            Nova Publicação
          </Button>
        </div>

        {/* Posts */}
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="shadow-md">
              <CardHeader className="flex gap-3 px-6 pt-6">
                <Avatar src={post.authorAvatar} size="md" />
                <div className="flex flex-col flex-1">
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-sm text-default-500 flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString("pt-BR")}
                  </p>
                </div>
              </CardHeader>

              <CardBody className="px-6 py-4 gap-4">
                {/* Images */}
                <div
                  className={`grid gap-2 ${post.images.length === 1 ? "grid-cols-1" : post.images.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}
                >
                  {post.images.map((image, idx) => (
                    <img
                      key={idx}
                      src={image || "/placeholder.svg"}
                      alt={`${post.petName} - foto ${idx + 1}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  ))}
                </div>

                {/* Pet Info */}
                <div className="flex flex-wrap gap-2">
                  <Chip color="primary" variant="flat" size="sm">
                    {post.petName}
                  </Chip>
                  <Chip color="secondary" variant="flat" size="sm">
                    {post.species}
                  </Chip>
                  <Chip variant="flat" size="sm">
                    Porte {post.size}
                  </Chip>
                  <Chip variant="flat" size="sm">
                    {post.color}
                  </Chip>
                </div>

                {/* Location & Date */}
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-start gap-2 text-default-600">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{post.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-default-600">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    <span>Desapareceu em: {new Date(post.disappearanceDate).toLocaleDateString("pt-BR")}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-default-700">{post.description}</p>

                {/* Contact */}
                <div className="bg-primary-50 rounded-lg p-3">
                  <p className="text-sm font-semibold text-primary-900 mb-1">Informações para contato:</p>
                  <p className="text-sm text-primary-800">{post.contact}</p>
                </div>
              </CardBody>

              <Divider />

              <CardFooter className="px-6 py-4 flex justify-between">
                <div className="flex gap-6">
                  <Button variant="light" startContent={<Heart className="h-5 w-5" />} className="text-default-600">
                    {post.likes}
                  </Button>
                  <Button
                    variant="light"
                    startContent={<MessageCircle className="h-5 w-5" />}
                    className="text-default-600"
                  >
                    {post.comments}
                  </Button>
                </div>
                <Button
                  variant="light"
                  startContent={<Share2 className="h-5 w-5" />}
                  className="text-default-600"
                  onPress={() => handleShare(post.id)}
                >
                  Compartilhar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

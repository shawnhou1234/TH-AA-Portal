"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Check, FileUp, Loader2, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { MarkdownEditor } from "@/components/markdown-editor"

export default function NewArticlePage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [previewMode, setPreviewMode] = useState("edit")
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    category: "",
    content: "",
    featuredImage: null as File | null,
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        featuredImage: e.target.files![0],
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Article published successfully",
        description: "Your article has been published and is now available in the knowledge hub.",
      })
      router.push("/articles")
    }, 1500)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="sm" className="mr-4" onClick={() => router.push("/articles")}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Articles
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Create New Article</h1>
          <p className="text-muted-foreground">Share knowledge and best practices with the team</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Article Content</CardTitle>
                <CardDescription>Write your article using Markdown formatting</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleChange("title", e.target.value)}
                      placeholder="Enter article title"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) => handleChange("excerpt", e.target.value)}
                      placeholder="Write a short summary of your article"
                      rows={3}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Content</Label>
                    <Tabs defaultValue="edit" value={previewMode} onValueChange={setPreviewMode}>
                      <TabsList className="mb-2">
                        <TabsTrigger value="edit">Edit</TabsTrigger>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                      </TabsList>
                      <TabsContent value="edit" className="mt-0">
                        <MarkdownEditor value={formData.content} onChange={(value) => handleChange("content", value)} />
                      </TabsContent>
                      <TabsContent value="preview" className="mt-0">
                        <div className="border rounded-md p-4 min-h-[300px] prose max-w-none">
                          {formData.content ? (
                            <div dangerouslySetInnerHTML={{ __html: formData.content }} />
                          ) : (
                            <p className="text-muted-foreground">No content to preview</p>
                          )}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Article Settings</CardTitle>
                <CardDescription>Configure article metadata and publishing options</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => handleChange("category", value)}>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Best Practices">Best Practices</SelectItem>
                        <SelectItem value="Tutorials">Tutorials</SelectItem>
                        <SelectItem value="Case Studies">Case Studies</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="featuredImage">Featured Image</Label>
                    <div className="grid gap-2">
                      {formData.featuredImage ? (
                        <div className="border rounded-md p-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <FileUp className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm truncate max-w-[200px]">{formData.featuredImage.name}</span>
                              <span className="text-xs text-muted-foreground">
                                ({Math.round(formData.featuredImage.size / 1024)} KB)
                              </span>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setFormData((prev) => ({ ...prev, featuredImage: null }))}
                              className="h-8 w-8 p-0"
                            >
                              <span className="sr-only">Remove file</span>
                              <Check className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <Label
                          htmlFor="featuredImage"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-md cursor-pointer hover:bg-muted/50"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <FileUp className="w-8 h-8 mb-2 text-muted-foreground" />
                            <p className="mb-2 text-sm text-muted-foreground">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-muted-foreground">PNG, JPG (MAX. 2MB)</p>
                          </div>
                          <Input
                            id="featuredImage"
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                          />
                        </Label>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Publishing</CardTitle>
                <CardDescription>Publish your article or save as draft</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={
                      isSubmitting || !formData.title || !formData.excerpt || !formData.category || !formData.content
                    }
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Publishing...
                      </>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Publish Article
                      </>
                    )}
                  </Button>
                  <Button type="button" variant="outline" className="w-full">
                    Save as Draft
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  )
}


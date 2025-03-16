"use client"

import type React from "react"

import { useState } from "react"
import { Bold, Italic, Link, List, ListOrdered } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface MarkdownEditorProps {
  value: string
  onChange: (value: string) => void
}

export function MarkdownEditor({ value, onChange }: MarkdownEditorProps) {
  const [selectionStart, setSelectionStart] = useState(0)
  const [selectionEnd, setSelectionEnd] = useState(0)

  const handleTextareaSelect = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const textarea = e.target as HTMLTextAreaElement
    setSelectionStart(textarea.selectionStart)
    setSelectionEnd(textarea.selectionEnd)
  }

  const insertMarkdown = (prefix: string, suffix = "") => {
    const newValue =
      value.substring(0, selectionStart) +
      prefix +
      value.substring(selectionStart, selectionEnd) +
      suffix +
      value.substring(selectionEnd)

    onChange(newValue)
  }

  const handleBold = () => insertMarkdown("**", "**")
  const handleItalic = () => insertMarkdown("*", "*")
  const handleLink = () => {
    const selectedText = value.substring(selectionStart, selectionEnd)
    if (selectedText) {
      insertMarkdown("[", "](url)")
    } else {
      insertMarkdown("[text](url)")
    }
  }
  const handleBulletList = () => insertMarkdown("- ")
  const handleNumberedList = () => insertMarkdown("1. ")

  return (
    <div className="border rounded-md">
      <div className="flex items-center gap-1 p-2 border-b">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm" onClick={handleBold}>
                <Bold className="h-4 w-4" />
                <span className="sr-only">Bold</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Bold</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm" onClick={handleItalic}>
                <Italic className="h-4 w-4" />
                <span className="sr-only">Italic</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Italic</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm" onClick={handleLink}>
                <Link className="h-4 w-4" />
                <span className="sr-only">Link</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Link</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm" onClick={handleBulletList}>
                <List className="h-4 w-4" />
                <span className="sr-only">Bullet List</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Bullet List</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm" onClick={handleNumberedList}>
                <ListOrdered className="h-4 w-4" />
                <span className="sr-only">Numbered List</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Numbered List</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onSelect={handleTextareaSelect}
        placeholder="Write your content using Markdown..."
        className="min-h-[300px] border-0 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  )
}


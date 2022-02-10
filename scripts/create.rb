require 'erb'

puts "Enter title for the blog."
post_title = gets
puts "Enter sub title for the blog."
post_subtitle = gets
puts "Enter description."
post_description = gets
puts "Enter banner image location."
post_bigimg = gets
puts "Enter share image location"
post_share_img = gets

puts "Enter tags, press * to stop"
post_tags = []
while user_input = gets.chomp
    case user_input
    when "*" 
        break
    else
        post_tags.push(user_input)
    end
end

puts "#{post_tags}"

puts "show avatar on screen? Yes or No"
show_avatar = false
while user_input = gets.chomp
    case user_input
    when "Yes"
        show_avatar = true
        break
    else
        break
    end
end

blog_template = "
---
layout: post
title: <%= post_title %>
description: <%= post_description %> 
bigimg: <%= post_bigimg %>
share-img: <%= post_share_img %>
tags: <%= #{post_tags}%>
---

> start here!

# First title
"


renderer = ERB.new(blog_template, nil, '>')
#puts output = renderer.result()

print renderer.result( binding )


File.open('text2.md', 'w') do |f|
  f.write renderer.result(binding)
end
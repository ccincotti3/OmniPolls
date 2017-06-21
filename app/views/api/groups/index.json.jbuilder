@groups.each do |group|
  json.set! group.id do
    json.partial! 'group', group: group
  end
end
